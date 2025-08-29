import { UserModel } from '@user/domain/user.model';

export interface UserResponseDto {
  id: number;
  name: string;
  email: string;
  roles: any[];
  photo: string;
}

export const mappingUserDto = (
  data: UserModel | UserModel[]
): UserResponseDto | UserResponseDto[] => {
  const isArray = Array.isArray(data);
  if (isArray) {
    const newUserResponse: UserResponseDto[] = data.map((user) => {
      const { id, name, email, roles, photo } = user;
      return {
        id,
        name,
        email,
        roles,
        photo,
      };
    });

    return newUserResponse;
  }

  const { id, name, email, roles, photo } = data;
  return {
    id,
    name,
    email,
    roles,
    photo,
  };
};
