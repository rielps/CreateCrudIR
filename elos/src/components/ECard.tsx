import React from 'react'
import { Card } from 'antd'
import type { ICard } from '../interface/ICard'

const ECard: React.FC<ICard> = ({ nome, frase }) => (
  <Card title={nome} variant="borderless" style={{ width: 300 }}>
    <p>{frase}</p>
  </Card>
)

export default ECard