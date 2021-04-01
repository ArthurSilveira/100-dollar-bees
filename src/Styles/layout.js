import { css } from '@emotion/react'
import { SPACE } from './constants'

const layoutStyles = css`
  html {
    /* Space globals */
    --space--xxs: ${SPACE.xxs};
    --space--xs: ${SPACE.xs};
    --space--s: ${SPACE.s};
    --space--m: ${SPACE.m};
    --space--l: ${SPACE.l};
    --space--xl: ${SPACE.xl};
    --space--xxl: ${SPACE.xxl};
    --space--none: 0;
    --space--auto: auto;

    /* Inset Padding globals */
    --space-inset--xxs: ${SPACE.xxs};
    --space-inset--xs: ${SPACE.xs};
    --space-inset--s: ${SPACE.s};
    --space-inset--m: ${SPACE.m};
    --space-inset--l: ${SPACE.l};
    --space-inset--xl: ${SPACE.xl};
    --space-inset--xxl: ${SPACE.xxl};

    --space-inset-squish--xs: ${SPACE.xxs} ${SPACE.xs};
    --space-inset-squish--s: ${SPACE.xs} ${SPACE.s};
    --space-inset-squish--m: ${SPACE.s} ${SPACE.m};
    --space-inset-squish--l: ${SPACE.m} ${SPACE.l};

    --space-inset-stretch--xs: ${SPACE.s} ${SPACE.xs};
    --space-inset-stretch--s: ${SPACE.m} ${SPACE.s};
    --space-inset-stretch--m: ${SPACE.l} ${SPACE.m};
    --space-inset-stretch--l: ${SPACE.xl} ${SPACE.l};

    /* Stack globals */
    --space-stack--xxs: 0 0 ${SPACE.xxs} 0;
    --space-stack--xs: 0 0 ${SPACE.xs} 0;
    --space-stack--s: 0 0 ${SPACE.s} 0;
    --space-stack--m: 0 0 ${SPACE.m} 0;
    --space-stack--l: 0 0 ${SPACE.l} 0;
    --space-stack--xl: 0 0 ${SPACE.xl} 0;
    --space-stack--xxl: 0 0 ${SPACE.xxl} 0;

    /* Shape globals */
    --border-radius--xxs: ${SPACE.xxs};
    --border-radius--xs: ${SPACE.xs};
    --border-radius--s: ${SPACE.s};
    --border-radius--m: ${SPACE.m};
    --border-radius--l: ${SPACE.l};
    --border-radius--xl: ${SPACE.xl};
    --border-radius--circle: 50%;
  }
`

export default layoutStyles
