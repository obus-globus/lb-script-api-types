import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32DiskPartition$DiskPartitionProperty extends Enum<Win32DiskPartition$DiskPartitionProperty> {
    static DESCRIPTION: Win32DiskPartition$DiskPartitionProperty;
    static DEVICEID: Win32DiskPartition$DiskPartitionProperty;
    static DISKINDEX: Win32DiskPartition$DiskPartitionProperty;
    static INDEX: Win32DiskPartition$DiskPartitionProperty;
    static NAME: Win32DiskPartition$DiskPartitionProperty;
    static SIZE: Win32DiskPartition$DiskPartitionProperty;
    static TYPE: Win32DiskPartition$DiskPartitionProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32DiskPartition$DiskPartitionProperty;
    static values(): Win32DiskPartition$DiskPartitionProperty[];
    private constructor()
    name(): "INDEX" | "DESCRIPTION" | "DEVICEID" | "DISKINDEX" | "NAME" | "SIZE" | "TYPE";
}