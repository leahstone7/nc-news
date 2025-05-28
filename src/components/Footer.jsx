function Footer(){
    return (
        <footer className="footer">
            <div>
            <p>{new Date().getFullYear()} NC News. All rights reserved.</p>
            <p>
                <a href="/privacy">Privacy Notice</a>
            </p>
            <a href="https://www.instagram.com/">Find us on Instagram |  </a>
            <a href="https://x.com/">Find us on Twitter |</a>
            <a href="https://facebook.com/"> Find us on Facebook </a>
            <p> Happy reading!</p>
            </div>
        </footer>
    )
}

export default Footer