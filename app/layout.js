import './globals.css'
import SearchBar from './components/SearchBar'

export const metadata = {
    title: 'Movie DB Prototype',
    description: 'A prototype of a movie database',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-zinc-900 text-zinc-200">
                <div className="flex flex-col gap-10 items-center p-6">
                    <SearchBar />
                    <div  className="flex flex-col w-full px-10"> {children} </div>
                </div>
            </body>
        </html>
    )
}
