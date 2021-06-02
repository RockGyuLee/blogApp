import React, { Suspense } from 'react';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";

//desktop 화면
const Hq = React.lazy(()=>import("../desktopPages/Hq"));
const Intro = React.lazy(()=> import("../desktopPages/Intro"));
const Project = React.lazy(()=> import("../desktopPages/Project"));

// tablet 화면
const TabletHq = React.lazy(()=>import("../tabletPages/TabletHq"));
const TabletIntro = React.lazy(()=> import("../tabletPages/TabletIntro"));

// mobile 화면
const MobileHq = React.lazy(()=>import("../MobilePages/MobileHq"));
const MobileIntro = React.lazy(()=> import("../MobilePages/MobileIntro"));


const routes = [
    {
        path : "/",
        exact : true,
        device : 'desktop',
        main : Hq
    },
    {
        path : "/intro",
        exact : true,
        device : 'desktop',
        main : Intro
    },
    {
        path : "/project",
        exact : true,
        device : 'desktop',
        main : Project
    },
    {
        path : "/",
        exact : true,
        device : 'tablet',
        main : TabletHq
    },
    {
        path : "/intro",
        exact : true,
        device : 'tablet',
        main : TabletIntro
    },
    {
        path : "/",
        exact : true,
        device : 'mobile',
        main : MobileHq
    },
    {
        path : "/intro",
        exact : true,
        device : 'mobile',
        main : MobileIntro
    }
];

function PageSwitcher({device}){
    return(
        <Switch>
            <Suspense fallback={<div>로딩중입니다...</div>}>
                {
                    routes.filter(r => r.device === device).map( (r, idx) => (
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