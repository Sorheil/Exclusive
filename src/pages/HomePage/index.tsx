// component
import Header from "./../../components/Header";
import { SideBarMenu } from "@/components/ui/SideBarMenu";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { PreHeader } from "@/components/ui/PreHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icone";
import Footer from "@/components/Footer";
import jblphotobanner from "./../../assets/image/JBL.png";
import ps5photobanner from "./../../assets/image/ps5.png";
import atractiveWoman from "./../../assets/image/attractive-woman-wearing-hat-posing-black-background 1.png";
import speaker from "./../../assets/image/speaker.png";
import perfume from "./../../assets/image/perfume.png";
/**
 * 
 * compte à rebours manquant
 */
// some mock data

const testData = [
    {
        name: "Produit Exemple 1",
        price: 19.99,
        oldPrice: 29.99,
        numberStar: 4.5,
        numberOpinion: 120
    },
    {
        name: "Produit Exemple 2",
        price: 29.99,
        oldPrice: 39.99,
        numberStar: 4.0,
        numberOpinion: 95
    },
    {
        name: "Produit Exemple 3",
        price: 15.99,
        oldPrice: 25.99,
        numberStar: 4.8,
        numberOpinion: 200
    },
    {
        name: "Produit Exemple 4",
        price: 39.99,
        oldPrice: 49.99,
        numberStar: 3.5,
        numberOpinion: 80
    },

];

// categories
const categories = [
    "Phones",
    "Computers",
    "Smartwatch",
    "Camera",
    "Headphones",
    "Gaming"
];

const itemscart = testData.map((item, index) => <ProductCard key={index} name={item.name} price={item.price} oldPrice={item.oldPrice} numberStar={item.numberStar} numberOpinion={item.numberOpinion} />);

const categoriesItem = categories.map((item, index) => (
    <li key={index} className="w-[170px] h-[145px] flex flex-col gap-3 justify-center items-center border-2 border-gray-200 rounded hover:bg-red-500">
        <Icon name={item} size={45} color="black" />
        <p>{item}</p>
    </li>
));
export const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="px-32 py-10 ">

                {/* left side  + promobanner */}
                <div className="flex justify-between gap-28 mb-32">
                    <SideBarMenu />
                    <PromoBanner />
                </div>

                {/* section  flash sales */}
                <section className="border-b-2 border-gray-200">
                    <PreHeader nameTitle="Today's" />
                    <div className="my-6">
                        <h2 className="text-4xl font-bold">Flash Sales</h2>
                    </div>
                    <div className="flex justify-between ">
                        {itemscart}
                    </div>
                    {/* button */}
                    <div className="flex justify-center my-12"> <Button textButton="View All Products"></Button></div>
                </section>

                {/* section  categories */}

                <section className="py-24 border-b-2 border-gray-200">
                    <PreHeader nameTitle="categories" />
                    <div className="mt-6">
                        <h2 className="text-4xl font-bold">Browse By Category </h2>
                    </div>

                    <ul className="flex justify-between mt-6">
                        {categoriesItem}
                    </ul>
                </section>

                {/*best selling products*/}

                <section className=" my-10">
                    <PreHeader nameTitle="This Month" />
                    <div className="my-6 flex justify-between items-center">
                        <h2 className="text-4xl font-bold">Best Selling Products</h2>
                        <Button textButton="View All"></Button>
                    </div>
                    <div className="flex justify-between mb-24">
                        {itemscart}
                    </div>

                    {/* promo banner */}
                    <div className=" flex justify-between p-6 bg-black text-white">
                        {/* dans les versions mobile de grande taille mettre du gap au lieu de justify beetwen(qui est ideale sur de petite taille d'ecran) */}
                        <div className="flex flex-col gap-28" >
                            <p className="text-green-500 font-semibold">categories</p>
                            <p className="text-5xl">Enhance Your Music Experience</p>
                            {/* <p>timer</p> */}
                            <Button textButton="Buy Now" color="green" />
                        </div>

                        <div className="flex justify-center my-12 max-w-[568px] max-h-[330px]">
                            <img src={jblphotobanner} alt="jbl-photobanner" className="object-contain object-center" />
                        </div>
                    </div>


                </section>


                {/* explore products */}
                <section className=" my-10">
                    <PreHeader nameTitle="Our Products" />
                    <div className="mt-6 ">
                        <h2 className="text-4xl font-bold">Explore Our Products</h2>
                    </div>
                    <div className="flex  flex-col gap-10 mt-6">
                        <div className="flex justify-between">
                            {itemscart}
                        </div>
                        <div className="flex justify-between">
                            {itemscart}
                        </div>
                    </div>
                    <div className="flex justify-center my-10"> <Button textButton="View All Products"></Button></div>
                </section>

                {/* section  flash sales */}
                <section className="">
                    <PreHeader nameTitle="Featured" />
                    <div className="my-6">
                        <h2 className="text-4xl font-bold">New Arrival</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-4 grid-rows-2 h-[511px]">
                        {/* first item */}
                        <div className="bg-black col-start-1 col-end- row-start-1 row-end-3 relative p-3">
                            <div className="flex justify-center  w-full h-full">
                                <img src={ps5photobanner} alt="" className="object-contain object-center" />
                            </div>
                            <div className="flex flex-col gap-0.5 absolute  bottom-3 left-3 text-white"  >
                                <h3 className="text-2xl font-semibold">PlayStation 5</h3>
                                <p className="w-2/3">Black and White version of the PS5 coming out on sale.</p>
                                <a href="#" className="underline">Shop Now</a>
                            </div>
                        </div>

                        {/* second item */}
                        <div className="bg-black col-span-2 row-start-1 row-end-2 relative p-3">
                            <div className="flex justify-center w-full h-full ">
                                <img src={atractiveWoman} alt="" className="object-contain object-center" />
                            </div>

                            <div className="flex flex-col gap-0.5 absolute  bottom-3 left-3 text-white"  >
                                <h3 className="text-2xl font-semibold">Women's Collections</h3>
                                <p className="w-2/3">Featured woman collections that give you another vibe.</p>
                                <a href="#" className="underline">Shop Now</a>
                            </div>
                        </div>

                        {/* third item */}
                        <div className="bg-black col-start-2 col-end-3 row-start-2 row-end-3 relative p-3">
                            <div className="flex justify-center  w-full h-full">
                                <img src={speaker} alt="" className="object-contain object-center" />
                            </div>

                            <div className="flex flex-col gap-0.5 absolute  bottom-3 left-3 text-white"  >
                                <h3 className="text-2xl font-semibold">Speakers</h3>
                                <p className="w-full">Amazon wireless speakers</p>
                                <a href="#" className="underline">Shop Now</a>
                            </div>
                        </div>

                        {/* fourth item */}
                        <div className="bg-black col-start-3 col-end-4 row-start-2 row-end-3 relative p-3">
                            <div className="flex justify-center w-full h-full ">
                                <img src={perfume} alt="" className="object-contain object-center " />
                            </div>

                            <div className="flex flex-col gap-0.5 absolute  bottom-3 left-3 text-white"  >
                                <h3 className="text-2xl font-semibold">Perfume</h3>
                                <p className="w-full">GUCCI INTENSE OUD EDP</p>
                                <a href="#" className="underline">Shop Now</a>
                            </div>
                        </div>
                    </div>

                </section>

                {/* devices */}
                <section className="flex justify-center my-20" >
                    <ul className="flex  items-center gap-14">

                        <li className="flex flex-col items-center justify-center gap-2">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-200"><div className="w-14 h-14 rounded-full flex justify-center items-center bg-black"><Icon name="Fastdelivery" size={40} color="white" /></div></div>
                            <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
                            <p className="text-sm">Free delivery for all orders over $140</p>
                        </li>

                        <li className="flex flex-col items-center justify-center gap-2">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-200"><div className="w-14 h-14 rounded-full flex justify-center items-center bg-black"><Icon name="Fastdelivery" size={40} color="white" /></div></div>
                            <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
                            <p className="text-sm">Friendly 24/7 customer support</p>
                        </li>


                        <li className="flex flex-col items-center justify-center gap-2">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-200"><div className="w-14 h-14 rounded-full flex justify-center items-center bg-black"><Icon name="Fastdelivery" size={40} color="white" /></div></div>
                            <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
                            <p className="text-sm">We reurn money within 30 days</p>
                        </li>

                    </ul>
                </section>

            </main >
            <Footer />
        </>
    )
}