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
        <Button onClick={toggleMenu} className="mr-4" variant="secondary">
          {open ? (
            <X className="h-6 w-6 cursor-pointer" />
          ) : (
            <Menu className="h-6 cursor-pointer w-6" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/" className="flex">
            <Folder className="mr-2 h-4 w-4" />
            <span>Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/howitworks" className="flex">
            <Notebook className="mr-2 h-4 w-4" />
            <span>How it works</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/features" className="flex">
            <KeyRound className="mr-2 h-4 w-4" />
            <span>Features</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/pricing" className="flex">
            <BadgeDollarSign className="mr-2 h-4 w-4" />
            <span>Pricing</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/blog" className="flex">
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/showcase" className="flex">
            <LayoutGrid className="mr-2 h-4 w-4" />
            <span>Showcase</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
