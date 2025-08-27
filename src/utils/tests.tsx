import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions } from '@testing-library/react'

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'>{
  preloadedState?: PreloadedState
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store,
    ...opcpesAdicionais
  }: ExtendedRenderOptions = {}
) {}
