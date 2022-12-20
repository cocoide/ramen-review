import { StarIcon } from '@heroicons/react/20/solid';
import { unstable_getServerSession } from 'next-auth';
import { use, useState } from 'react'
import prisma from '../../../libs/client/prisma'
import { authOptions } from '../../../libs/server/auth';
import { cn } from '../../../utils/cn';

{/* <use hooks>に関する注意点
https://zenn.dev/nishiurahiroki/articles/7e61590892499b */}

async function fetchYourReview() {
    const session = await unstable_getServerSession(authOptions);
    const data = await prisma.review.findMany({
        where: {
            authorId: session?.user.email
        }
    });
    return data
}

const FetchReview = () => {

    const review = use(fetchYourReview())
    return (
        <div>
            {review.map(review => {
                return (
                    <div key={review.id} className="flex justify-between p-2">
                        <h2>{review.title}</h2>
                        <div className="flex">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <div key={index}
                                        className={cn(index <= review.rating ? "text-yellow-400" : "text-gray-200")}
                                    ><StarIcon className="h-6 w-6" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default FetchReview