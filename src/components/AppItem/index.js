// Write your code here
import './index.css'

const AppItem = props => {
  const {data} = props
  const {appName, imageUrl} = data
  const onClickAlert = () => {
    alert(
      'This app is in progress keep wait some more time for further updates -by your Ajaykumar',
    )
  }
  return (
    <li className="app-list-item-cont" onClick={onClickAlert}>
      <img src={imageUrl} alt={appName} className="imageUrl" />
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppItem
