import React, { useEffect, useReducer } from "react";

// Action types
const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS"; // changed from FETCH_START
const FETCH_ERROR = "FETCH_ERROR";

// Initial state
const initialState = {
  loading: true,
  error: null,
  data: null,
};

// Reducer function (must accept state and action)
const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const MultiState = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}
      {state.data && (
        <div>
          <h3>{state.data.title}</h3>
          <p>{state.data.body}</p>
        </div>
      )}
    </div>
  );
};

export default MultiState;
