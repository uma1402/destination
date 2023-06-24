// Write your code here

import './index.css'

const Destinationitem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li>
      <img alt={name} src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default Destinationitem
