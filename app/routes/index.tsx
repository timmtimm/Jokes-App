import type { LinksFunction, MetaFunction } from "remix";
import { Link } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
    return [
        {
        rel: "stylesheet",
        href: stylesUrl,
        },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Remix: So great, it's funny!",
    description:
        "Remix jokes app. Learn Remix and laugh at the same time!",
});

export function ErrorBoundary() {
    return (
        <div className="error-container">
            I did a whoopsies.
        </div>
    );
}

export default function Index() {
    return (
        <div className="container">
            <div className="content">
                <h1>
                    Remix <span>Jokes!</span>
                </h1>
                <nav>
                    <ul>
                        <li>
                        <Link to="jokes">Read Jokes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
