const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
];

export const SideBarMenu = () => {
    return (
        <>
            <aside className="">
                <nav>
                    <ul className=" flex flex-col gap-y-0.5 w-40">
                        {categories.map((category, index) => (
                            <li key={index} >
                                <a href="#" className="text-base flex justify-between">{category}

                                    {index === 0 || index === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" /></svg>
                                        : null}

                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};