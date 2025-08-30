import { MedicModel } from '@medic/domain/medic.model';

export interface MedicResponseDto {
  id: number;
  fullName: string;
  identifier: string;
}

export const mappingMedicDto = (
  data: MedicModel | MedicModel[]
): MedicResponseDto | MedicResponseDto[] => {
  const isArray = Array.isArray(data);

  if (isArray)
    return data.map((medic) => ({
      id: medic.id,
      fullName: `${medic.name} ${medic.lastname}`,
      identifier: medic.identifier,
    }));

  return {
    id: data.id,
    fullName: `${data.name} ${data.lastname}`,
    identifier: data.identifier,
  };
};

export interface MedicRequestDto {
  id: number;
  fullName: string;
  identifier: string;
}
