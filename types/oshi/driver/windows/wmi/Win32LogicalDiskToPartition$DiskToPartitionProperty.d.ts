import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32LogicalDiskToPartition$DiskToPartitionProperty extends Enum<Win32LogicalDiskToPartition$DiskToPartitionProperty> {
    static ANTECEDENT: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static DEPENDENT: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static ENDINGADDRESS: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static STARTINGADDRESS: Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32LogicalDiskToPartition$DiskToPartitionProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "ANTECEDENT" | "DEPENDENT" | "ENDINGADDRESS" | "STARTINGADDRESS";
}