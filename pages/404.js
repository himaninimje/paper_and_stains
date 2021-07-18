import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="text-center font-sans text-5xl p-20 space-y-10">
                <p>Oops!</p>
                <p className="py-4">I have not created that artwork yet!</p>

                <hr className="shadow" />

                <p >You can <Link className="hover:text-gray-500" href="mailto:paperandstains@gmail.com">E-Mail</Link> me your suggestions</p>
                <p >Go back to <Link className="hover:text-gray-500" href="/">Paper and Stains</Link></p>

            </div >
        </>
    );
}

export default NotFound;