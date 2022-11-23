import React from 'react';
import Category from './Category';

const features = [
    {
        name: 'Skill developing books',
        description:
            'Skill development encompasses several vital attributes, including identifying ones skill gaps and enabling one to develop those skills to achieve their goal. In other words, it refers to systematic and sustained efforts towards improving ones ability to perform job-related activities.',
        picture: 'https://i.ibb.co/xCNXzGp/people-book-pile-students-climbing-books-business-success-education-level-staff-skill-development-le.webp'
    },
    {
        name: 'Motivational Books',
        description:
            'Possible criteria that have been suggested as categorizing a book as inspirational fiction include novels whose main purpose is depict an example of change in the life of a major characters in order to inspire readers to make such changes in their own life.',
        picture: 'https://i.ibb.co/5krF4Mn/motivational-books.webp'
    },
    {
        name: 'Fiction Books',
        description:
            'Fiction refers to literature created from the imagination. Mysteries, science fiction, romance, fantasy, chick lit, crime thrillers are all fiction genres. Fiction texts are created from the imagination and include made-up stories with characters, a setting and plot from the authors own imagination.',
        picture: 'https://i.ibb.co/VW3ydxf/Old-Bookcase.jpg'
    },
]

const Catagories = () => {
    return (
        <div className="my-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-pink-600">Categories</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our featured categories</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">After becoming a member from here you can select a category. You can buy or resell your books here.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none ">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16 ">
                        {features.map(feature => (
                            <Category
                                key={feature.name}
                                feature={feature}
                            ></Category>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagories;