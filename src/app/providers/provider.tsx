 import { ThemeProvider } from '@emotion/react'
import React from 'react'
import theme from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import {  QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../shared/lib/query_client'
 
 function Providers({ children }: { children: React.ReactNode }) {
   return (
    <QueryClientProvider client={queryClient}>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
       {children}
     </ThemeProvider>
    </QueryClientProvider>
   )
 }
 
 export default Providers
  