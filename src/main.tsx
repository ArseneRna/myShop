import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar.tsx'
import { AppSidebar } from './components/Asidebar/app-sidebar.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
           <Navbar />
          <App />
        </SidebarInset>
    </SidebarProvider>
  </StrictMode>,
)
