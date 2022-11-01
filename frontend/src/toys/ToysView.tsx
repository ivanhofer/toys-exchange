import styled from "styled-components";
import { AddNewToyForm } from "./AddNewToyForm";
import { ToysList } from "./ToysList";

export const ToysView = () => {
  return (
    <PageWrapper>
      <h1>List of toys</h1>
      <ToysList />
      <AddNewToyForm />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 54px;
`;
