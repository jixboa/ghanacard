import React, { useState, useEffect } from "react";
import ListImages3 from "./ListImages3";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { Slide } from "react-awesome-reveal";
import { useIdleTimer } from "react-idle-timer";
import { signOut } from "../../store/actions/authAction";

const ViewImages2 = (setMuiData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSignOut = () => {
    //signOut the user
    dispatch(signOut());
    navigate("/signin");
  };

  const onPrompt = () => {
    // Fire a Modal Prompt
  };

  const onIdle = () => {
    // Close Modal Prompt
    // Do some idle action like log out your user
    HandleSignOut();
  };

  const onActive = (event) => {
    start();
    // Close Modal Prompt
    // Do some active action
  };

  const onAction = (event) => {
    // Do something when a user triggers a watched event
  };

  const { start } = useIdleTimer({
    onPrompt,
    onIdle,
    onActive,
    onAction,
    timeout: 10 * 2400 * 1000,
    promptTimeout: 0,
    events: [
      "mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mousewheel",
      "mousedown",
      "touchstart",
      "touchmove",
      "MSPointerDown",
      "MSPointerMove",
      "visibilitychange",
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    element: document,
    startOnMount: true,
    startManually: false,
    stopOnIdle: false,
    crossTab: false,
    name: "idle-timer",
    syncTimers: 0,
    leaderElection: false,
  });

  //const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  // const images = useSelector((state) => state.images);

  //const [image, setImage] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  /*  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
 */
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <>
      {loading ? (
        <div style={style}>
          <DotLoader color={"#31CFB1"} loading={loading} size={60} />
        </div>
      ) : (
        <>
          {/* <AddTodo todo={todo} setTodo={setTodo} /> */}
          {/* <ListTodos setTodo={setTodo} /> */}
          <Slide triggerOnce={true}>
            {/*  <ListImages /> */}
            <ListImages3 />
          </Slide>
        </>
      )}
    </>
  );
};

export default ViewImages2;
