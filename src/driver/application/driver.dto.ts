import { DriverModel } from '@driver/domain/driver.model';

export interface DriverResponseDto {
  id: number;
  fullName: string;
  driverLicenseCountry: string;
}

export const mappingDriverDto = (
  data: DriverModel | DriverModel[]
): DriverResponseDto | DriverResponseDto[] => {
  const isArray = Array.isArray(data);

  if (isArray)
    return data.map((driver: DriverModel) => ({
      id: driver.id,
      fullName: `${driver.name} ${driver.lastname}`,
      driverLicenseCountry: `${driver.isoCountry} - ${driver.driverLicense}`,
    }));

  return {
    id: data.id,
    fullName: `${data.name} ${data.lastname}`,
    driverLicenseCountry: `${data.isoCountry} - ${data.driverLicense}`,
  };
};
