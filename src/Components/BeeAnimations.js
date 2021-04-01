import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/css'

const flowerBee = keyframes`
    0% {
      transform: translateY(-2px) translateX(1px) rotate(0);
                    /* filter: drop-shadow(0 0 5px rgba(248, 207, 0,0)); */
    }
        25% {
      transform: translateY(-5px) translateX(-1px) rotate(0);
    }
    35% {
      transform: translateY(-9px) translateX(1px) rotate(0);
    }
    45% {
      transform: translateY(-2px) translateX(0) rotate(10deg);
    }
    55% {
      transform: translateY(3px) translateX(-3px) rotate(-35deg);
      /* filter: drop-shadow(0 0 5px rgba(248, 207, 0,0.0)); */
    }
        /* 70% {
                filter: drop-shadow(0 0 5px rgba(248, 207, 0,0.7));
    } */
    73% {
        transform: translateY(5px) translateX(-6px) rotate(-35deg);
        /* filter: drop-shadow(0 0 5px rgba(248, 207, 0,0.7)); */
    }
    100% {
      transform: translateY(-2px) translateX(1px) rotate(0);
      /* filter: drop-shadow(0 0 5px rgba(248, 207, 0,1)); */
    }
`

const beeAway = keyframes`
    0% {
      transform: translateY(-2px) translateX(-1px) scaleX(-1);
      /* filter: drop-shadow(0 0 5px rgba(248, 207, 0,0.7)); */
    }
    50% {
      transform: translateY(-50px) translateX(30px) scaleX(-1);
      opacity: 0;
    }
    75% {
      transform: translateY(20px) translateX(20px) scaleX(1);
      opacity: 0;
    }
    100% {
      transform: translateY(-2px) translateX(1px) scaleX(1);
      opacity: 1;
    }
`

export function FlowerBee(props) {
  const Scene = styled.div({
    position: `${props.position}`,
    maxWidth: '25px',
    maxHeight: '25px',
    width: '100%',
    height: '100%',
    top: `${props.top}`,
    bottom: `${props.bottom}`,
    right: `${props.right}`,
    left: `${props.left}`,
    pointerEvents: 'visible',
    zIndex: `${props.zIndex}`,
    '&::after': {
      content: `"🐝"`,
      position: 'absolute',
      top: 0,
      right: '-13px',
      padding: '0 0 0 18px',
      minWidth: '20px',
      minheight: '20px',
      animation: `${flowerBee} ${props.timing ? props.timing : 7}s infinite running`,
      transition: 'all 0.2s ease',
      zIndex: 0
    },
    '&::before': {
      content: `"💐"`,
      position: 'absolute',
      top: '3px',
      right: '0px',
      minWidth: '20px',
      minHeight: '20px',
      transform: 'scaleX(-1)',
      zIndex: 20
    },

    '&:hover': {
      '&::after': {
        animation: `${beeAway} 2s 1`
      }
    }
  })

  return <Scene />
}
