const Chatbar = () => {
    return ( 
        <div className="Chatbar">
            <nav className="msg-nav">
                <div className="message">
                    <ul>
                        <li><h1>嘿!你好!</h1></li>
                        <li><h1>初次見面</h1></li>
                        <li><h1>早安</h1></li>
                        <li><h1>午安</h1></li>
                        <li><h1>晚安</h1></li>
                        <li><h1>安安</h1></li>
                        <form>
                            <nav className="send-box">
                                <ul>
                                    <li><input type="text" className="type"/></li>
                                    <li className="send-btn">Send</li>
                                </ul>
                            </nav>
                        </form>
                    </ul>
                </div>    
            </nav>
        </div>
    );
}
 
export default Chatbar;