import { Suspense } from 'react';
import ParcialLoading from '../../@Components/Animations/ParciaLoading';
import BookmarkedShop from '../components/BookmarkedShop';

export default async function BookmarkPage({ params }: { params: { userId: string } }) {
    return (
        <div className="w-full h-screen bg-gray-200">
            <Suspense fallback={<ParcialLoading />}>
                <BookmarkedShop userId={params.userId} />
            </Suspense>
        </div>
    )
}