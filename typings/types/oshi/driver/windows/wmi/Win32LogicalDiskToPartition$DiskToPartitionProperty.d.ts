import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32LogicalDiskToPartition$DiskToPartitionProperty extends Enum<Win32LogicalDiskToPartition$DiskToPartitionProperty> {
    static ANTECEDENT: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static DEPENDENT: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static ENDINGADDRESS: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static STARTINGADDRESS: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static values(): Win32LogicalDiskToPartition$DiskToPartitionProperty[];
    private constructor()
    name(): "ANTECEDENT" | "DEPENDENT" | "ENDINGADDRESS" | "STARTINGADDRESS";
}