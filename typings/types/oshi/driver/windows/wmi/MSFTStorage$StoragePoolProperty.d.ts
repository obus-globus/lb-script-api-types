import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$StoragePoolProperty extends Enum<MSFTStorage$StoragePoolProperty> {
    static FRIENDLYNAME: MSFTStorage$StoragePoolProperty;
    static OBJECTID: MSFTStorage$StoragePoolProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MSFTStorage$StoragePoolProperty;
    static values(): MSFTStorage$StoragePoolProperty[];
    private constructor()
    name(): "FRIENDLYNAME" | "OBJECTID";
}