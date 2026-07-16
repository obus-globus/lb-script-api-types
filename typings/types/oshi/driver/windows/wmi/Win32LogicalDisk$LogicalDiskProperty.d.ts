import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32LogicalDisk$LogicalDiskProperty extends Enum<Win32LogicalDisk$LogicalDiskProperty> {
    static ACCESS: Win32LogicalDisk$LogicalDiskProperty;
    static DESCRIPTION: Win32LogicalDisk$LogicalDiskProperty;
    static DRIVETYPE: Win32LogicalDisk$LogicalDiskProperty;
    static FILESYSTEM: Win32LogicalDisk$LogicalDiskProperty;
    static FREESPACE: Win32LogicalDisk$LogicalDiskProperty;
    static NAME: Win32LogicalDisk$LogicalDiskProperty;
    static PROVIDERNAME: Win32LogicalDisk$LogicalDiskProperty;
    static SIZE: Win32LogicalDisk$LogicalDiskProperty;
    static VOLUMENAME: Win32LogicalDisk$LogicalDiskProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32LogicalDisk$LogicalDiskProperty;
    static values(): Win32LogicalDisk$LogicalDiskProperty[];
    private constructor()
    name(): "ACCESS" | "DESCRIPTION" | "DRIVETYPE" | "FILESYSTEM" | "FREESPACE" | "NAME" | "PROVIDERNAME" | "SIZE" | "VOLUMENAME";
}