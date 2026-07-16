import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32DiskDriveToDiskPartition$DriveToPartitionProperty extends Enum<Win32DiskDriveToDiskPartition$DriveToPartitionProperty> {
    static ANTECEDENT: Win32DiskDriveToDiskPartition$DriveToPartitionProperty;
    static DEPENDENT: Win32DiskDriveToDiskPartition$DriveToPartitionProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32DiskDriveToDiskPartition$DriveToPartitionProperty;
    static values(): Win32DiskDriveToDiskPartition$DriveToPartitionProperty[];
    private constructor()
    name(): "ANTECEDENT" | "DEPENDENT";
}