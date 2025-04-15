"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

import { useDisclosure } from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Divider } from "@heroui/react";

import AppFeatures from "./features";
import DownloadApk from "./downloadapk";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { BrandLogo } from "@/components/icons";
import FormUtilities from "./navbar/formsutilities";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (href: string) => {
    if (href === siteConfig.links.planner) {
      setSelectedLink(href);
      onOpen();
    } else {
      setMenuOpen(false);
      router.push(href);
    }
  };

  const handleConfirmNavigation = () => {
    window.open(selectedLink, "_blank", "noopener noreferrer");
    onClose();
  };

  if (pathname.includes("/room-planner")) {
    return null;
  }

  return (
    <>
      <NextUINavbar
        className="bg-blue-800 text-white xl:px-12"
        isMenuOpen={menuOpen}
        maxWidth="full"
        onMenuOpenChange={setMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3">
            <NextLink className="flex justify-between items-center gap-1" href="/">
              <BrandLogo />
              <p className="font-bold text-2xl">DMCI HOMES</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex" justify="center">
          <NavbarItem>
            <ul className="hidden lg:flex gap-6">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      "w-full text-left uppercase",
                      pathname === item.href ? "text-green-500 font-bold" : ""
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex basis-1/5 sm:basis-full" justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <FormUtilities />
            {/* <AppFeatures /> */}
            <DownloadApk />
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="xl:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <button
                  className={clsx(
                    "w-full text-left",
                    pathname === item.href ? "text-blue-500 font-bold" : ""
                  )}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.label}
                </button>
              </NavbarMenuItem>
            ))}

            <Divider className="my-4" />

            <div className="space-y-1">
              <p className="text-small text-default-400">Form & Utilities</p>
            </div>

            {siteConfig.navMenuItemsLinks.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                {item.download ? (
                  <a
                    download
                    className={clsx(
                      "w-full text-left block",
                      pathname === item.href ? "text-blue-500 font-bold" : ""
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    className={clsx(
                      "w-full text-left",
                      pathname === item.href ? "text-blue-500 font-bold" : ""
                    )}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </button>
                )}
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>

      {/* Modal Confirmation for Room Planner */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Open Room Planner</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to open the room planner in a new tab?</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button variant="light" onPress={handleConfirmNavigation}>
              Open Planner
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
