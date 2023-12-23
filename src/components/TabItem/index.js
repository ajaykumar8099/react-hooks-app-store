// Write your code here

import './index.css'

const TabItem = props => {
  const {data, onClickTab, isActive} = props
  const {tabId, displayText} = data

  const onClickBtn = () => {
    onClickTab(tabId)
  }

  const btnColor = isActive ? 'blue' : 'normal'
  return (
    <li className="tab-li-items-cont">
      <button
        type="button"
        className={`button ${btnColor}`}
        onClick={onClickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
