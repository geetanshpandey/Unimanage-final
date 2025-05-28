"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Folder,
  Notebook,
  BadgeDollarSign,
  KeyRound,
  MessageCircle,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
      <Button onClick={toggleMenu} className="mr-4 bg-transparent text-white hover:bg-transparent hover:text-gray-200" variant="secondary">
        {open ? (
          <X className="h-8 w-8 cursor-pointer" />
        ) : (
          <Menu className="h-12 w-12 cursor-pointer" />
        )}
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black">
        <DropdownMenuItem asChild>
          <Link href="/" className="flex bg-black text-white">
            <Folder className="mr-2 h-4 w-4" />
            <span>Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/howitworks" className="flex bg-black text-white">
            <Notebook className="mr-2 h-4 w-4" />
            <span>How it works</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/features" className="flex bg-black text-white">
            <KeyRound className="mr-2 h-4 w-4" />
            <span>Features</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/pricing" className="flex bg-black text-white">
            <BadgeDollarSign className="mr-2 h-4 w-4" />
            <span>Pricing</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/showcase" className="flex bg-black text-white">
            <LayoutGrid className="mr-2 h-4 w-4" />
            <span>Showcase</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
