import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickEmojiButton = () => {
    clickEmoji(id)
  }
  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onClickEmojiButton}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
