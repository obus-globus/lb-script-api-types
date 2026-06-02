import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$StoragePoolToPhysicalDiskProperty extends Enum<MSFTStorage$StoragePoolToPhysicalDiskProperty> {
    static PHYSICALDISK: MSFTStorage$StoragePoolToPhysicalDiskProperty;
    static STORAGEPOOL: MSFTStorage$StoragePoolToPhysicalDiskProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MSFTStorage$StoragePoolToPhysicalDiskProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "STORAGEPOOL" | "PHYSICALDISK";
}