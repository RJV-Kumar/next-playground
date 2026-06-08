/**
 * sample routes can be: http://localhost:3001/docs/feature/concept
 * http://localhost:3001/docs/feature
 * http://localhost:3001/docs
**/
export default async function Docs({
    params
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } =  await params;
    if(slug?.length == 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        )
    } else if (slug?.length == 1) {
        return (
            <h1>
                Viewing docs for feature {slug[0]}
            </h1>
        )
    } else {
        return (
            <div> <h1>Docs Home Page</h1>
            </div>
        );
    }
}