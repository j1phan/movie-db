import { NextResponse } from "next/server";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmMyMWMwNGExOTg4Yjk0NjhjN2NkYmJjZDc1NjM0YyIsInN1YiI6IjY1MDY0N2RmNDJkOGE1MDBmZTNhYTI4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1lHZN4PJmLBxZ0fueQiQp9D7XBJGkkfKl3rDI23gWs",
    },
};
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const page = searchParams.get("page") || 1
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
        options,
    )
        .then((response) => response.json())
        .then((response) => {
            return response
        })
        .catch((err) => console.error(err))
    return NextResponse.json( 
        {
            results: res.results, 
            total_pages: res.total_pages, 
            total_results: res.total_results
        } 
    )
}
