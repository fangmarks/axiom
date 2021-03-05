import Head from 'next/head'
import BlogName from '../constants'

export default function CustomHead(props: { title?: string, description?: string }) {


    return (
        <>
            <Head>
                <script async defer data-website-id="b0a1cf56-c1f9-4a5c-bb1b-1a9c812ac857" src="https://stats.lio.cat/umami.js"></script>
                {props.title ? (
                    <>
                        <title>
                            {props.title} | {BlogName}
                        </title>

                        <meta property="og:title" content={props.title + ' | ' + BlogName} />
                        <meta property="og:description" content={props.description} />

                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="@himbolion" />
                        <meta name="twitter:description" content={props.description} />
                        <meta name="twitter:title" content={props.title + ' | ' + BlogName} />
                        <meta name="twitter:image" content='https://common.himbo.cat/avatars/caecus/ref_head.jpg' />


                    </>
                ) : (
                    <>
                        <title>
                            {BlogName}
                        </title>
                        <meta property="og:title" content={BlogName} />
                        <meta property="og:description" content="random writings by some lion" />

                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="@himbolion" />
                        <meta name="twitter:description" content="random writings by some lion" />
                        <meta name="twitter:title" content={BlogName} />
                        <meta name="twitter:image" content='https://common.himbo.cat/avatars/caecus/ref_head.jpg' />
                    </>
                )}
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>

            </Head>
        </>
    )
}
