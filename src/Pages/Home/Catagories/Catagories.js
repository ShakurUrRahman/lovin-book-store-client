import React from 'react';

const features = [
    {
        name: 'Skill developing books',
        description:
            'Skill development encompasses several vital attributes, including identifying ones skill gaps and enabling one to develop those skills to achieve their goal. In other words, it refers to systematic and sustained efforts towards improving ones ability to perform job-related activities.',
    },
    {
        name: 'Motivational Books',
        description:
            'Possible criteria that have been suggested as categorizing a book as inspirational fiction include novels whose main purpose is depict an example of change in the life of a major characters in order to inspire readers to make such changes in their own life.',

    },
    {
        name: 'Fiction Books',
        description:
            'Fiction refers to literature created from the imagination. Mysteries, science fiction, romance, fantasy, chick lit, crime thrillers are all fiction genres.',

    },
]

const Catagories = () => {
    return (
        <div className="bg-white my-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-indigo-600">Catagories</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our featured categories</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">After becoming a member from here you can select a category. You can buy or resell your books here.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagories;