import styled from '@emotion/styled';

export const PhonebookForm = styled.form`
  display: flex;

  flex-direction: column;
  width: 340px;
  height: 160px;
  border: 1px solid black;
  padding: 0 15px;
  &:not(:last-child) {
    gap: 5px;
  }
`;
export const PhonebookLabel = styled.label``;
export const PhonebookInput = styled.input`
  width: 120px;
  height: 20px;
`;

export const PhonebookButton = styled.button`
  width: 120px;
  height: 20px;
  margin: 20px auto 0;
`;
