import type { FC } from "react";
import type { User } from "../types/User.type";
type UserInfoProps = {
  users: User[];
};
const UserInfo: FC<UserInfoProps> = ({ users }) => {
  return (
    <ul>
      {users.map(({ name, age }, idx) => (
        <li key={idx}>{`Name: ${name}, Age: ${age}.`}</li>
      ))}
    </ul>
  );
};

export default UserInfo;
