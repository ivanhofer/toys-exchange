import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ToysList } from "./ToysList";
import { toysListState } from "./toysState";

export const ToysView = () => {
  const toysList = useRecoilValue(toysListState);

  return (
    <PageWrapper>
      <h1>List of all toys</h1>
      <ToysList toysList={toysList} />
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
