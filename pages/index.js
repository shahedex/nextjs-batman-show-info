// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const DynamicPostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;

// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello next.js" />
//                 <PostLink title="Learn nextjs is awesome" />
//                 <PostLink title="Deploy next apps" />
//             </ul>
//             <h1>My Dynamic Routes</h1>
//             <ul>
//                 <DynamicPostLink id="hello-nextjs" />
//                 <DynamicPostLink id="learn-nextjs" />
//                 <DynamicPostLink id="deploy-nextapp" />
//             </ul>
//         </Layout>
//     )
// }

// <div>
            /* <Header/> */
            /* <Link href="/about">
                <a title="About Page">About Page</a>
            </Link> */
            // <Layout>
                // <p>Hello next.js</p>
                // <a href="/about">Anchor About page</a>
            // </Layout>
        /* </div> */