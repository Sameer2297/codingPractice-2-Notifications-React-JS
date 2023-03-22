const Notification = props => {
  const {srcUrl,content,className,contentStyle,icon} = props;
  return (
      <div className = {className}>
        <img src = {srcUrl} className={icon} />
        <p className={contentStyle}>{content}</p>
      </div>
  )
}

const element = (
  <div>
    <h1 className="main-heading">Notifications</h1>
    <Notification className="notification-container info-msg" icon="icon" content="Information Message" contentStyle="text" srcUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
    <Notification className="notification-container suc-msg" icon="icon" content="Success Message" contentStyle="text" srcUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
    <Notification className="notification-container warn-msg" icon="icon" content="Warning Message" contentStyle="text" srcUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
    <Notification className="notification-container err-msg" icon="icon" content="Error Message" contentStyle="text" srcUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
