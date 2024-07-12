import { BooleanField, Datagrid, List, NumberField, ReferenceField, SelectField, TextField } from "react-admin";

export const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField
          source="correct"
        />
        <ReferenceField source="challengeId" reference="challenges" />
        <NumberField source="order" />
        <TextField 
          source="imageSrc"
        />
        <TextField 
          source="audioSrc"
        />
      </Datagrid>
    </List>
  );
};