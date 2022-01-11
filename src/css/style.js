import { createGlobalStyle } from 'styled-components'

import { Theme } from '../utils/themes/ theme'

export const Style = createGlobalStyle`
  html, body {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;

    background-color: ${Theme.default["lightGray"]};
  }

  * {
    box-sizing: border-box;
  }
`