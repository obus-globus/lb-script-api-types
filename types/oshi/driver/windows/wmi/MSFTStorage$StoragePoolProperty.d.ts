import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSFTStorage$StoragePoolProperty extends Enum<MSFTStorage$StoragePoolProperty> {
    static FRIENDLYNAME: MSFTStorage$StoragePoolProperty;
    static OBJECTID: MSFTStorage$StoragePoolProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MSFTStorage$StoragePoolProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "FRIENDLYNAME" | "OBJECTID";
}