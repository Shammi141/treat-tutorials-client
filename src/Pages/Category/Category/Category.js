import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialSummaryCard from '../../Shared/TutorialSummaryCard/TutorialSummaryCard';

const Category = () => {

    //loading data
    const categoryTutorial = useLoaderData();

    return (
        <div>
            {
                categoryTutorial.map(tutorial => <TutorialSummaryCard
                    key = {tutorial._id}
                    tutorial = { tutorial}
                ></TutorialSummaryCard>)
            }
        </div>
    );
};

export default Category;