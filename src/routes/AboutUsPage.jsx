
import Footer from "../components/footer";
import Menu from "../components/menu";



function About () {
    return (
        <>
        <Menu/>
        <div className="containerAbout">
        <div className="divInsideAbout1">
            <h2>What is Better Me App?</h2>
            <img className="imgAbout" src="https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?" alt="" />
            <p>Welcome to BetterMeApp --your one-stop hub for mastering essential soft skills.</p>
            <p>We believe soft skills, like communication, leadership, and emotional intelligence, are key to success. Unfortunately, they’re often overlooked in traditional learning.</p>
            <p>Our mission is to close that gap. We offer an easy-to-use platform with all the resources you need in one place. Whether you're improving communication, building stronger relationships, or leading more effectively, we’re here to help.</p>
            <p>At BetterMeApp, we make self-improvement simple and enjoyable. Our resources meet you where you are and guide your growth.</p>
            <p>Join us today and start becoming more confident and capable in both life and work.</p>
        </div>
        {/* <div className="divInsideAbout">
            <h2>How It All Started</h2>
            <img className="ImgAbout" src="" alt="" />
            <p>Hello</p>
        </div> */}
        <div className="divInsideAbout">
            <h2>The Creator</h2>
            <img className="ImgAbout" src="https://media.licdn.com/dms/image/v2/C4D03AQGGxMBS3qP0Qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1632552675805?e=1732752000&v=beta&t=uUyArXkQpE78NqQULS-C5ftOqmYy7bTL_NvBCQBLLS4" alt="" />
            <h3>Adekusibe Ogunokun</h3>
            <p>Front End Developer with background in content marketing and SEO...</p>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default About;