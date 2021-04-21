import React, { Suspense } from 'react';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";

const Hq = React.lazy(()=>import("../pages/Hq"));
const Intro = React.lazy(()=> import("../pages/Intro"));

const routes = [
    {
        path : "/Hq",
        exact : true,
        main : Hq
    },
    {
        path : "/intro",
        exact : true,
        main : Intro
    }
];

function PageSwitcher(props){
    console.log("props",props);
    return(
        <Router>
            <Switch>
                <Suspense fallback={<div>로딩중입니다...</div>}>
                    <Route 
                        path={props.info["iniPage"]}
                        children={<Intro/>}
                    />
                </Suspense>
            </Switch>
        </Router>
    )
}

export default PageSwitcher