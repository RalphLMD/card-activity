function Card() {
    return (
        <div className="card">
            <img src="https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg" className="card-img"/>

            <div className="card-header">
                <h2 className="card-name">Ralph Dahilig</h2>
                <p className="card-occupation">Frontend Developer</p>
                <p className="card-website">ralphlmd.github.io/ralph-dahilig-web-portfolio/</p>
                <div className="card-btns">
                    <button className="card-btn"><i class="fa fa-envelope" aria-hidden="true"></i>Email</button>
                    <button className="card-btn"><i class="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</button>
                </div>
            </div>

            <div className="card-about">
                <h3 className="card-title">About</h3>
                <p className="card-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className="card-about">
                <h3 className="card-title">Interests</h3>
                <p className="card-text">Computer Programming, Web development, Gaming, Cycling, Drawing.</p>
            </div>

            <div className="card-footer">
                <div className="social-icons">
                    <i class=" social-icon fa fa-twitter-square" aria-hidden="true"></i>
                    <i class="social-icon fa fa-facebook-square" aria-hidden="true"></i>
                    <i class="social-icon fa fa-instagram" aria-hidden="true"></i>
                    <i class="social-icon fa fa-github-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Card