import placeholder from "../assets/user/user_placeholder.png";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
    return (
        <section className="h-screen bg-neutral-200 font-rubik flex flex-col">
            <h1 className="text-dark bg-accent px-4 py-6 text-lg">
                Account Settings
            </h1>
            <div className="flex flex-col gap-4 px-4 py-6 flex-grow">
                <div className="flex w-full gap-4 items-center">
                    <div className="relative inline-block w-fit">
                        <img
                            src={placeholder}
                            alt="user"
                            className="h-20 w-20 max-h-20 max-w-20 rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 cursor-pointer">
                            <FaCamera className="text-white h-3 w-3" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[15px] font-medium text-dark">
                            Marry Doe
                        </h1>
                        <p className="text-sm text-dark leading-5">
                            email@email.com
                        </p>
                    </div>
                </div>
                <p className="text-sm text-dark leading-5">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                    Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                    Aliquyam Erat, Sed Diam
                </p>
                <div className="border-b-2 border-dashed border-accent-dark mt-2"></div>
            </div>
            <div className="border-b-2 border-dashed border-accent-dark mb-10"></div>
        </section>
    );
};
export default Profile;
