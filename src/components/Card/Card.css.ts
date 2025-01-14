import { vars } from '@/app/globals.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const cardBase = style({
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

export const cardRecipe = recipe({
  base: cardBase,
  variants: {
    size: {
      large: {
        width: '345px',
        height: '483px',
        padding: '0 24px',
        position: 'absolute',
        transition: 'transform 0.1s ease-in-out',
      },
      small: {
        width: '165px',
        height: '106px',
        padding: '14px 16px',
      },
    },
    type: {
      relation: { background: vars.color.egg, color: vars.color.eggFont },
      issue: { background: vars.color.tomato, color: vars.color.tomatoFont },
      love: { background: vars.color.sweet, color: vars.color.sweetFont },
      business: { background: vars.color.ham, color: vars.color.hamFont },
      hobby: { background: vars.color.cheese, color: vars.color.cheeseFont },
      humor: { background: vars.color.lettuce, color: vars.color.lettuceFont },
      'ice-breaker': { background: vars.color.avocado, color: vars.color.avocadoFont },
      'self-development': { background: vars.color.pimento, color: vars.color.pimentoFont },
    },
    relativePosition: {
      '0': {zIndex: 1,transform: 'scale(1.1)'},
      '1': {
        opacity: 0.3,
        transform: 'scale(1) translateY(11%)',
      },
      '-1': {
        opacity: 0.3,
        transform: 'scale(1) translateY(-11%)',
      },
      'more': {
        opacity: 0, // 투명하게
      },
    },
  },
});
export const title = style({
  fontSize: 28,
  fontWeight: 'bold',
  color: vars.color.black,
  wordBreak: 'break-all',
})

export const description = style({
  fontSize: 16,
  color: vars.color.gray3,
})

export const subtitle = style({
  fontSize: 16,
})

export const smallTitle = style([
  title,
  {
    fontSize: 18,
  },
])

export const largeContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '285px',
  gap: 16,
})

export const smallContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

export const cardImage = style({
  margin: '0 0 0 -24px',
})
