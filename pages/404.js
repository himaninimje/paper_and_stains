import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="text-center font-sans text-5xl sm:p-20 space-y-10">
                <p className="mt-4">Oops!</p>
                <p className="py-4">I have not created that artwork yet!</p>

                <hr className="shadow" />
                <div className="space-y-10 py-5">
                    <p >You can <Link className="hover:text-gray-500" href="mailto:paperandstains@gmail.com">E-Mail</Link> or <Link className="hover:text-gray-500" href="https://www.instagram.com/paper_and_stains/">DM on instagram</Link> for custom orders</p>
                    <p >Go back to <Link className="hover:text-gray-500" href="/">Paper and Stains</Link></p>
                </div>
            </div >
        </>
    );
}

export default NotFound;