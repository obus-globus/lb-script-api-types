import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$StoragePoolToPhysicalDiskProperty extends Enum<MSFTStorage$StoragePoolToPhysicalDiskProperty> {
    static PHYSICALDISK: MSFTStorage$StoragePoolToPhysicalDiskProperty;
    static STORAGEPOOL: MSFTStorage$StoragePoolToPhysicalDiskProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MSFTStorage$StoragePoolToPhysicalDiskProperty;
    static values(): MSFTStorage$StoragePoolToPhysicalDiskProperty[];
    private constructor()
    name(): "STORAGEPOOL" | "PHYSICALDISK";
}