import React, { useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../shared/lib/query_client'
import { useThemeStore } from '../../shared/store/theme'

function Providers({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeStore();
  
  const theme = useMemo(() => getTheme(mode), [mode]);

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

  