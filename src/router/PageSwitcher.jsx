import React, { Suspense } from 'react';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";

const Hq = React.lazy(()=>import("../pages/Hq"));
const Intro = React.lazy(()=> import("../pages/Intro"));

const routes = [
    {
        path : "/",
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
    return(
        <Switch>
            <Suspense fallback={<div>로딩중입니다...</div>}>
                {
                    routes.map( (r, idx) => (
                        <Route
                            key={idx}
                            path={r.path}
                            exact={r.exact}
                            children={<r.main/>}
                        />
                    ))
                }
            </Suspense>
        </Switch>
    )
}

export default PageSwitcher