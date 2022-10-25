import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialSummaryCard from '../../Shared/TutorialSummaryCard/TutorialSummaryCard';

const Home = () => {

    //for loading all tutorials
    const allTutorial = useLoaderData();

    return (
        <div>
            <h2>home component: {allTutorial.length}</h2>
            {
                allTutorial.map(tutorial => <TutorialSummaryCard 
                    key = {tutorial._id}
                    tutorial = {tutorial}
                >
                </TutorialSummaryCard>)
            }
        </div>
    );
};

export default Home;