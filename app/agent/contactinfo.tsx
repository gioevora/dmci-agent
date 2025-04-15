import { Divider, Link } from "@heroui/react";
import React from "react";
import { FaSquareInstagram, FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdFacebook, MdPhone } from "react-icons/md";

interface AgentData {
  email: string;

  profile: {
    facebook: string;
    instagram: string;
    phone: string;
  }
}


interface AgentDataProps {
  data: AgentData;
}

const AgentContactInfo: React.FC<AgentDataProps> = ({ data }) => {
  const formatPhoneNumber = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  };

  return (
    <div className="flex flex-col mb-4">
      {/* Contact Info */}
      <div>
        <h2 className="text-sm font-semibold mb-2">Contact Info</h2>

        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="bg-blue-100 py-1 px-1 rounded-lg">
            <MdEmail className="text-blue-700" size={18} />
          </div>
          <span>:</span>
          <a
            className="text-blue-200 hover:underline"
            href={`mailto:${data.email}`}
          >
            {data.email}
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="bg-blue-100 py-1 px-1 rounded-lg">
            <MdPhone className="text-blue-700" size={18} />
          </div>
          <span>:</span>
          <a
            className="text-blue-200 hover:underline"
            href={`tel:+63${data.profile.phone}`}
          >
           (+63) {formatPhoneNumber(data.profile.phone)}
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="bg-blue-100 py-1 px-1 rounded-lg">
            <FaTelegram className="text-blue-700" size={18} />
          </div>

          <span>:</span>
          <a
            className="text-blue-200 hover:underline"
            href={`https://t.me/+63${data.profile.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
              Ella Sarmiento
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="bg-blue-100 py-1 px-1 rounded-lg">
            <FaViber className="text-blue-700" size={18} />
          </div>

          <span>:</span>
          <a
            className="text-blue-200 hover:underline"
            href={`viber://chat?number=%2B63${data.profile.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ella Sarmiento
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="bg-blue-100 py-1 px-1 rounded-lg">
            <FaWhatsapp className="text-blue-700" size={18} />
          </div>

          <span>:</span>
          <a
            className="text-blue-200 hover:underline"
            href={`https://wa.me/63${data.profile.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
             Ella Sarmiento
          </a>
        </div>
      </div>

      <Divider className="my-4" />

      {/* Social Links */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Social Links</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="bg-blue-100 py-1 px-1 rounded-lg">
              <MdFacebook className="text-blue-700" size={18} />
            </div>

            {":"}
            <Link
              className="text-blue-200 text-tiny break-words line-clamp-1 hover:underline"
              href={data.profile.facebook}
              target="_blank"
            >
              Sonora Garden Residences - DMCI Homes by Ella Sarmiento
            </Link>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <div className="bg-blue-100 py-1 px-1 rounded-lg">
              <FaSquareInstagram className="text-blue-700" size={18} />
            </div>

            {":"}
            <Link
              className="text-blue-200 text-tiny break-words line-clamp-1 hover:underline"
              href={data.profile.instagram}
              target="_blank"
            >
              DMCI Homes by Ella Sarmiento
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgentContactInfo;
