import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { MAIL, MOBILE } from '@/lib/constants';

const ContactSection = () => {
    return (
        <div className="container mx-auto my-32 px-4">
            <div className="flex flex-wrap justify-center gap-6">
                {/* Mail Card */}
                <div className="w-full sm:w-1/3 md:w-1/4 bg-white rounded-lg border border-gray-200 shadow-lg p-6 text-center hover:shadow-xl hover:border-gray-400 transition-all duration-300">
                    <a href={"mailto:" + MAIL} className="flex flex-col items-center outline-none">
                        <Mail size={48} color="#ff5b5b" />
                        <p className="mt-4 text-xl font-semibold text-gray-800">Send Email</p>
                        <p className="mt-2 text-sm text-gray-500">Reach us by email for inquiries or support.</p>
                    </a>
                </div>

                {/* WhatsApp Card */}
                <div className="w-full sm:w-1/3 md:w-1/4 bg-white rounded-lg border border-gray-200 shadow-lg p-6 text-center hover:shadow-xl hover:border-gray-400 transition-all duration-300">
                    <a target="_blank" rel="noopener noreferrer" href={"https://wa.me/" + MOBILE} className="flex flex-col items-center outline-none">
                        <MessageCircle size={48} color="#25d366" />
                        <p className="mt-4 text-xl font-semibold text-gray-800">WhatsApp</p>
                        <p className="mt-2 text-sm text-gray-500">Message us on WhatsApp for quick responses.</p>
                    </a>
                </div>

                {/* Phone Card */}
                <div className="w-full sm:w-1/3 md:w-1/4 bg-white rounded-lg border border-gray-200 shadow-lg p-6 text-center hover:shadow-xl hover:border-gray-400 transition-all duration-300">
                    <a href={"tel:" + MOBILE} className="flex flex-col items-center outline-none">
                        <Phone size={48} color="#00bcd4" />
                        <p className="mt-4 text-xl font-semibold text-gray-800">Call Us</p>
                        <p className="mt-2 text-sm text-gray-500">Call us for immediate assistance or inquiries.</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
