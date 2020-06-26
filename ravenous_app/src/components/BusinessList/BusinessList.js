import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


class BusinessList extends React.Component{
    //render function to render the BusinessList component
    render() {
        return (
            <div className="BusinessList">
                {
                    //creates an array of businesses to create the businesslist component
                    this.props.businesses.map(business => {
                        return <Business business={business} key={business.id}/>
                    })
                }
            </div>
        )
    };
};

//exporting the component
export default BusinessList; 