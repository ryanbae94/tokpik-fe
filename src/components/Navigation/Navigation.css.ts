import { style } from '@vanilla-extract/css'

export const Container = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  maxWidth: '467px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#333333',
  height: '60px',
  borderRadius: '15px 15px 0 0',
})

export const ButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
})

export const ButtonText = style({
  fontSize: '12px',
})
