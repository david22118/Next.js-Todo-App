import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import AppBar from "../components/AppBar/AppBar";
import Snapshot from "../Components/SnapShot/Snapshot";
import Taskslist from "../Components/Tasks/Taskslist";


const FirstPage = inject("tasksManager")(
  observer((props) => {
    useEffect(() => {
      (async () => {
        await props.tasksManager.getTasks();
      })();
    }, []);

    return (
     <>
        <AppBar />
        <Snapshot />
        <Taskslist />
    </>
    );
  })
);

export default FirstPage;