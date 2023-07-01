// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachimageList, onSelectingImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachimageList

  const onClickThumbnail = () => {
    onSelectingImage(id)
  }

  console.log(isActive)
  const aciveThumbmail = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-list-item">
      <button
        className={`each-thumbnail-item-button ${aciveThumbmail}`}
        onClick={onClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
