"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import React, { useState } from "react";
import { FaViber } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTelegramFill,
  RiWechat2Fill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const router = useRouter(); // Initialize router
  const pathname = usePathname();

  if (pathname.includes("/room-planner")) {
    return null;
  }

  return (
    <footer className=" bg-gray-100 dark:bg-neutral-900">
      <div className=" mx-auto px-4 xl:px-24 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">DMCI</h2>
            <p className="text-sm text-gray-600 dark:text-white">
              With skill, passion, and dedication, we continue our quest in
              attaining engineering excellence in quality homebuilding and
              community development that shall endure generations.
            </p>

            <div className="py-4">
              <Button
                className="uppercase text-white bg-green-600"
                endContent={<MdArrowOutward />}
                isLoading={buttonLoading}
                variant="solid"
                onPress={() => {
                  setButtonLoading(true);
                  router.push(`https://dmci-agent-admin.vercel.app/auth/login`);
                }}
              >
                Log in as Admin
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex justify-start items-start pl-4 sm:justify-start md:justify-end">
  <div className="text-left">
    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
    <div className="grid grid-cols-2 gap-4">
      <ul className="text-sm text-gray-600 dark:text-white">
        <li>
          <Link className="hover:text-blue-600" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600" href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600" href="/properties">
            Properties
          </Link>
        </li>

        <li>
          <Link className="hover:text-blue-600" href="/agent">
            Agent
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600" href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="text-sm text-gray-600 dark:text-white">
        <li>
          <Link
            className="hover:text-blue-600"
            href="https://apps.dmcihomes.com/OnlineCRF/Main?ac=EL25650"
          >
            Customer Reservation Form
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-blue-600"
            href="/room-planner"
            target="_blank"
          >
            Room Planner
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600" href="/appointment">
            Set Appointment
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600" href="/calculator">
            Loan Calculator
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600" href="/career">
            Apply Now
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>

        </div>

        <hr className="border-gray-300 my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-1">
            <Link
              aria-label="Facebook"
              className="text-gray-500 hover:text-blue-600"
              href="https://www.facebook.com/share/We79XYCKWCDWmhE2/?mibextid=JRoKGi"
            >
              <RiFacebookBoxFill className="h-6 w-6" />
            </Link>
            <Link
              aria-label="Instagram"
              className="text-gray-500 hover:text-pink-600"
              href="https://www.instagram.com/ella.dmcihomes?igsh=MXdkOGhlcXJ6ZXJoaw%3D%3D&utm_source=qr"
            >
              <RiInstagramFill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="Telegram"
              className="text-gray-500 hover:text-blue-500"
              href="https://t.me/+639175480999"
            >
              <RiTelegramFill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="WhatsApp"
              className="text-gray-500 hover:text-green-500"
              href="https://wa.me/639175480999"
            >
              <RiWhatsappFill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="WeChat"
              className="text-gray-500 hover:text-green-600"
              href="weixin://dl/chat?number=639175480999"
            >
              <RiWechat2Fill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="Viber"
              className="text-gray-500 hover:text-purple-600"
              href="viber://chat?number=%2B639175480999"
            >
              <FaViber className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-white">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              className="hover:to-blue-500"
              target="_blank"
              href="https://infinitech-2025.vercel.app"
            >
              Infinitech Advertising Corporation.
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
