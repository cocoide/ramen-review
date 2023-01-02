import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import BackButton from '../components/backbutton';
import RamenFooterButton from '../components/RamenFooterButton';

export default function RamenLoading() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center place-items-center">


                <div className="flex justify-between place-items-center p-3 w-full
sticky top-0  backdrop-blur-sm bg-white/90 border-t border-[#f5ead4]">
                    {/* <Link href={"/ramens"}><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
                    <BackButton />
                    <h2 className="h-7 w-[40%] bg-gray-200 animate-pulse rounded-xl"></h2>
                    {/* Ramen shop title */}
                    <EllipsisHorizontalIcon className="h-8 w-8 text-[#c3b9a8]" />
                </div>
            </div>


            <div className="h-screen"></div>
            <RamenFooterButton />
        </div>
    )
}