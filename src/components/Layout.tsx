import HeaderNav from "./HeaderNav";

export default function Layout({ children }:{children: JSX.Element | JSX.Element[]}) {
    return (
        <div>
            <HeaderNav/>
            <main>
                {children}

            </main>
        </div>

    )
}