import { style } from '@vanilla-extract/css'
import { vars } from './globals.css'
import { recipe } from '@vanilla-extract/recipes'
export const Main = recipe({
  base: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    isFilterOn: {
      true: {
        ':before': {
          content: '""', // 필수 content 속성
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      false: {},
    },
  },
})

export const Header = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '4rem 1.5rem 2rem',
})

export const HeaderText = style({
  color: vars.color.white,
  fontSize: '1.75rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '140%' /* 2.45rem */,
  letterSpacing: '-0.0175rem',
})
export const HeaderText2 = style({
  color: vars.color.primary,
  fontSize: '1.75rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '140%' /* 2.45rem */,
  letterSpacing: '-0.0175rem',
})
export const FilterBox = style({ display: 'flex', gap: '0.625rem' })

export const FilterButton = recipe({
  base: {
    width: '1.9375rem',
    aspectRatio: '1',
    border: `0.5px ${vars.color.gray2} solid`,
    backgroundColor: vars.color.gray4,
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      cursor: 'pointer', // 커서를 포인터로 변경
    },
  },
  variants: {
    isFilterListEmpty: {
      true: {
        border: `0.5px ${vars.color.primary} solid`,
        backgroundColor: vars.color.primary,
      },
      false: {},
    },
  },
})
export const CardBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingInline: '1.5rem',
  width: '100%',
  height: '65%',
})

export const FilterList = style({
  width: '100%',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  color: vars.color.gray3,
  overflowY: 'hidden',
  overflowX: 'scroll',
  gap: '0.625rem',
})
