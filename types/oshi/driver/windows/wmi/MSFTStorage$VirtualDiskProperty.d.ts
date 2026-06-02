import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$VirtualDiskProperty extends Enum<MSFTStorage$VirtualDiskProperty> {
    static FRIENDLYNAME: MSFTStorage$VirtualDiskProperty;
    static OBJECTID: MSFTStorage$VirtualDiskProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MSFTStorage$VirtualDiskProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "FRIENDLYNAME" | "OBJECTID";
}