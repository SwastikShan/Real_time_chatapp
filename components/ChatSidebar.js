const ChatSidebar = ({ userInfo }) => {
    const { name, room } = userInfo.user;

    return (
        <div className="col-sm-2">
            <div className="row">
                <div className="col">
                    <h5>Room Name</h5>
                    <p className="primary-bg p-1 m-0">{room}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatSidebar;
