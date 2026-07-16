import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$PhysicalDiskProperty extends Enum<MSFTStorage$PhysicalDiskProperty> {
    static FRIENDLYNAME: MSFTStorage$PhysicalDiskProperty;
    static OBJECTID: MSFTStorage$PhysicalDiskProperty;
    static PHYSICALLOCATION: MSFTStorage$PhysicalDiskProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MSFTStorage$PhysicalDiskProperty;
    static values(): MSFTStorage$PhysicalDiskProperty[];
    private constructor()
    name(): "FRIENDLYNAME" | "PHYSICALLOCATION" | "OBJECTID";
}