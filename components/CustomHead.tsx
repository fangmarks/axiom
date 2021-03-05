import Head from 'next/head'
import BlogName from '../constants'

export default function CustomHead(props: { title?: string }) {


    return (
        <>
            <Head>
                {props.title ? (
                    <>
                        <title>
                            {props.title} | {BlogName}
                        </title>
                    </>
                ) : (
                    <>
                        <title>
                            {BlogName}
                        </title>
                    </>
                )}
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>

            </Head>
        </>
    )
}