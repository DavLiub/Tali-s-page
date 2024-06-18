import React from 'react';
import {useNavigate} from 'react-router-dom';
import {pages} from "../utils/pages";

const PagesMenu = () => {
    const navigate = useNavigate();

    return (
        <ul className="flex flex-col">
            {Object.entries(pages).map(([key, page], index) => (
                        <li key={index} className="mr-2">
                            <button
                                onClick={() => navigate(page.link)}
                                className={"hover:underline"}
                            >
                                {page.name}
                            </button>
                        </li>
                    )
            )}
        </ul>
    );
};

export default PagesMenu;