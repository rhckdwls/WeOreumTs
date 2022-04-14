import styled from '@emotion/styled';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 72px;
  height: 100vh;
`;

export const ContainerForm = styled.form`
  width: 800px;
  margin: 50px 0 150px 0;
`;

export const CreateTitleInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 20px 10px;
  font-size: 35px;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const CreateSubGuideTitle = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const CreateInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Img = styled.img`
  width: 350px;
  height: 250px;
`;

export const ImgInput = styled.input`
  margin-bottom: 20px;
  font-size: 15px;
`;

export const CreateInputdec = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 200px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  resize: none !important;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
export const CreateSelect = styled.select`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 20%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 300px;
    border: 1px solid #f1f1f1;
    padding: 5px;
    border-radius: 2px;
  }
`;
