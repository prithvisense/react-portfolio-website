import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import 'bootstrap/dist/css/bootstrap.css'

class Tabbar extends React.Component {
    render() {
        return (
            <div className="main-tab">
                <Tabs>
                    <TabList>
                        <Tab>Homepage</Tab>
                        <Tab>Timeline</Tab>
                        <Tab>Personal Information</Tab>
                    </TabList>
                </Tabs>

            </div>
        )
    }
}

export default Tabbar;