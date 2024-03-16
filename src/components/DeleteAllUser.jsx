import React from "react";
import styled from "styled-components";
import { deleteAllUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () =>{

    const dispatch = useDispatch()

    const deleteUsers = () => {
        dispatch(deleteAllUser())
    }
    return(
        <Wrapper>
        <button className="btn clear-btn" onClick={deleteUsers}>Delete All Users</button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform : capitalize;
    background-color : #ad025a;
    margin-top : 2rem;
    float :right;
  }

`;

export default DeleteAllUser