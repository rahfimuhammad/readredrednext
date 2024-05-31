import React from "react";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    
    return (
        <Box>
            <Navbar/>
                <Box
                    minH='calc(100vh - 60px)'
                >
                    {children}
                </Box>
            <Footer/>
        </Box>
    )
}

export default Layout