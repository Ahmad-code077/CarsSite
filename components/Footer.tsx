'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import Link from 'next/link';

const footerData = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About', href: '/about' },
  ],
  socialLinks: [
    { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <Twitter /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram /> },
    { name: 'GitHub', url: 'https://github.com', icon: <Github /> },
  ],
  contactDetails: [
    {
      label: 'Email',
      value: 'wheelDeal@example.com',
      href: 'mailto:wheelDeal@example.com',
    },
    { label: 'Phone', value: '+92-321-555-1234' },
    { label: 'Address', value: '123 Auto Street, Car City, PK' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className='bg-muted-800 text-white py-12 px-6 sm:px-16 border-t border-border mt-4'>
      <div className='max-w-7xl mx-auto '>
        {/* Footer Top Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8'>
          {/* Navigation Links */}
          <div>
            <h3 className='text-2xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-4'>
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className='hover:text-primary'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className='text-2xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex  gap-8'>
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className='text-2xl text-primary hover:scale-110 transition-scale duration-300'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className='text-2xl font-semibold mb-4'>Contact Us</h3>
            {footerData.contactDetails.map((contact, index) => (
              <p key={index} className='text-lg'>
                {contact.label}:{' '}
                {contact.href ? (
                  <a
                    href={contact.href}
                    className='text-primary hover:text-gray-300'
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className='text-primary'>{contact.value}</span>
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='border-t border-gray-600 pt-6'>
          <p className='text-sm text-muted-foreground text-center'>
            &copy; {new Date().getFullYear()} WheelDeal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
