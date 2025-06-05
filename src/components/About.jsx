import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            <Helmet>
                <title>About Me - Shilesh Mavchi</title>
                <meta name="description" content="About Shilesh Mavchi, Full Stack Developer." />
            </Helmet>
            <div>About content here...</div>
        </>
    );
}

export default About;