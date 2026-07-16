import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$VirtualDiskProperty extends Enum<MSFTStorage$VirtualDiskProperty> {
    static FRIENDLYNAME: MSFTStorage$VirtualDiskProperty;
    static OBJECTID: MSFTStorage$VirtualDiskProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MSFTStorage$VirtualDiskProperty;
    static values(): MSFTStorage$VirtualDiskProperty[];
    private constructor()
    name(): "FRIENDLYNAME" | "OBJECTID";
}