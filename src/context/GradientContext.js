import React from 'react'

const GradientContext = React.createContext({
  gradientDirectionsList: [
    {directionId: 'TOP', value: 'top', displayText: 'Top'},
    {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
    {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
    {directionId: 'LEFT', value: 'left', displayText: 'Left'},
  ],
})

export default GradientContext
