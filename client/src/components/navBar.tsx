import * as React from "react";
import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const authStatus = true;
const _NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {authStatus ? (
          <>
            <NavigationMenuItem>
              <Link to="/dashboard">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Logout
                </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        ) : (
            <></>
        )}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

type ListItemProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            href={href}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
export default _NavigationMenuDemo;
