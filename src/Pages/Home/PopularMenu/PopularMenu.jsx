// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/menuCard/MenuCard";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular");
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From our Menu"}
                subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div className="gird md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;