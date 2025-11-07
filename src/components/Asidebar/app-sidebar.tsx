import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "MENU",
      url: "#",
      items: [
 
        {
          title: "Accueil",
          url: "/",
          isActive: true,
        },
        {
          title: "Boutique",
          url: "/boutique",
        },
        {
          title: "A propos",
          url: "/a-propos",
        },
        {
          title: "Contact",
          url: "/contact",
        },
      ],
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>

      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-6 items-center justify-center">
                {item.items.map((item) => (
                  <SidebarMenuItem className="w-full" key={item.title}>
                    <SidebarMenuButton className="w-full flex items-center justify-center h-12 rounded-2xl font-semibold  data-[active=true]:font-bold data-[active=true]:text-primary" asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title} </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
