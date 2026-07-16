import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32DiskDrive$DiskDriveProperty extends Enum<Win32DiskDrive$DiskDriveProperty> {
    static INDEX: Win32DiskDrive$DiskDriveProperty;
    static MANUFACTURER: Win32DiskDrive$DiskDriveProperty;
    static MODEL: Win32DiskDrive$DiskDriveProperty;
    static NAME: Win32DiskDrive$DiskDriveProperty;
    static SERIALNUMBER: Win32DiskDrive$DiskDriveProperty;
    static SIZE: Win32DiskDrive$DiskDriveProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32DiskDrive$DiskDriveProperty;
    static values(): Win32DiskDrive$DiskDriveProperty[];
    private constructor()
    name(): "INDEX" | "MANUFACTURER" | "MODEL" | "NAME" | "SERIALNUMBER" | "SIZE";
}