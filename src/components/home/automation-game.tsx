import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function AutomationGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [conveyorPosition, setConveyorPosition] = useState(3); // Position 0-6
  const [boxPosition, setBoxPosition] = useState(null); // null or a position 0-6
  const [productionSpeed, setProductionSpeed] = useState(1500); // ms between spawns
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('automationGameHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  useEffect(() => {
    let timer;
    let spawner;
    
    if (gameStarted && !isGameOver) {
      // Timer countdown
      timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            clearInterval(spawner);
            setIsGameOver(true);
            
            // Save high score if current score is higher
            if (score > highScore) {
              setHighScore(score);
              localStorage.setItem('automationGameHighScore', score.toString());
            }
            
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      
      // Box spawner
      spawner = setInterval(() => {
        if (!boxPosition) {
          setBoxPosition(0); // Start box at left edge
        }
      }, productionSpeed);
      
      // Box movement
      const mover = setInterval(() => {
        if (boxPosition !== null) {
          if (boxPosition >= 6) {
            // Box missed conveyor
            setBoxPosition(null);
          } else {
            setBoxPosition(prev => prev + 1);
          }
        }
      }, 400);
      
      return () => {
        clearInterval(timer);
        clearInterval(spawner);
        clearInterval(mover);
      };
    }
  }, [gameStarted, isGameOver, boxPosition, productionSpeed, score, highScore]);
  
  // Effect to check for capture
  useEffect(() => {
    if (boxPosition === conveyorPosition) {
      setScore(prev => prev + 1);
      setBoxPosition(null);
      
      // Increase difficulty every 5 points
      if (score > 0 && score % 5 === 0) {
        setProductionSpeed(prev => Math.max(prev - 200, 500));
      }
    }
  }, [boxPosition, conveyorPosition, score]);

  const handleStartGame = () => {
    setGameStarted(true);
    setScore(0);
    setTime(30);
    setIsGameOver(false);
    setBoxPosition(null);
    setProductionSpeed(1500);
  };
  
  const moveConveyor = (direction) => {
    if (!gameStarted || isGameOver) return;
    
    setConveyorPosition(prev => {
      if (direction === 'left' && prev > 0) {
        return prev - 1;
      } else if (direction === 'right' && prev < 6) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Automation Challenge</h2>
          <p className="text-gray-600 mb-4">Control the conveyor belt to catch falling packages!</p>
          <p className="text-lg font-semibold">High Score: {highScore}</p>
        </div>

        <Card className="max-w-xl mx-auto shadow-lg border-2 border-blue-200">
          <CardContent className="p-6">
            {!gameStarted || isGameOver ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">
                  {isGameOver ? 'Game Over!' : 'Ready to Play?'}
                </h3>
                {isGameOver && (
                  <div className="mb-6">
                    <p className="text-xl">Your Score: <span className="font-bold text-blue-600">{score}</span></p>
                    {score > highScore && <p className="text-green-600 font-semibold mt-2">New High Score!</p>}
                  </div>
                )}
                <Button onClick={handleStartGame} size="lg">
                  {isGameOver ? 'Play Again' : 'Start Game'}
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between mb-4">
                  <div>
                    <span className="font-semibold">Score:</span> {score}
                  </div>
                  <div>
                    <span className="font-semibold">Time:</span> {time}s
                  </div>
                </div>
                
                <Progress value={(time / 30) * 100} className="mb-4" />
                
                <div className="h-60 bg-gray-100 relative rounded-md border border-gray-300">
                  {/* Factory line visualization */}
                  <div className="absolute bottom-0 w-full h-8 bg-gray-300 flex items-center px-2">
                    <div className="w-full relative h-1 bg-gray-400">
                      {/* Positions 0-6 */}
                    </div>
                  </div>

                  {/* Box falling */}
                  {boxPosition !== null && (
                    <div 
                      className="absolute w-8 h-8 bg-amber-600 rounded"
                      style={{ 
                        left: `${(boxPosition / 6) * 100}%`, 
                        bottom: `${50 - (boxPosition * 5)}%`,
                        transform: 'translateX(-50%)'
                      }}
                    />
                  )}

                  {/* Conveyor */}
                  <div 
                    className="absolute w-16 h-4 bg-blue-600 rounded"
                    style={{ 
                      left: `${(conveyorPosition / 6) * 100}%`, 
                      bottom: '32px',
                      transform: 'translateX(-50%)'
                    }}
                  />
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                  <Button 
                    variant="outline"
                    onClick={() => moveConveyor('left')}
                    disabled={conveyorPosition === 0}
                  >
                    ← Move Left
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => moveConveyor('right')}
                    disabled={conveyorPosition === 6}
                  >
                    Move Right →
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Experience a simplified version of our automation simulation tools.</p>
          <p className="mt-1">Our actual systems include comprehensive PLC training and advanced process simulation.</p>
        </div>
      </div>
    </section>
  );
}