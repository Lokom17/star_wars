"use client";

import { useRouter } from 'next/navigation'

import { PaginationProps } from "../types";
import { CustomButton } from "../components";

export default function Pagination({ isPrevious, isNext }: PaginationProps) {
    const router = useRouter();

    const handlePreviousClick = () => {
        if (isPrevious) {
            const url = new URL(isPrevious);
            const numberPage = new URLSearchParams(url.search).get("page");
            const search = new URLSearchParams(url.search).get("search");
            const searchParam = search ? `search=${search}&` : "";
            router.push(`${window.location.origin}/?${searchParam}page=${numberPage?.toString()}`);
        }
    }

    const handleNextClick = () => {
        if (isNext) {
            const url = new URL(isNext);
            const numberPage = new URLSearchParams(url.search).get("page");
            const search = new URLSearchParams(url.search).get("search");
            const searchParam = search ? `search=${search}&` : "";
            router.push(`${window.location.origin}/?${searchParam}page=${numberPage?.toString()}`);
        }
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {isPrevious && (
                <CustomButton
                    btnType="button"
                    title="Previous"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handlePreviousClick}
                />

            )}
            {isNext && (
                <CustomButton
                    btnType="button"
                    title="Next"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNextClick}

                />
            )}
        </div>
    );
};
