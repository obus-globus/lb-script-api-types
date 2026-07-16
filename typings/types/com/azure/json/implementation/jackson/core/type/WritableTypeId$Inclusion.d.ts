import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class WritableTypeId$Inclusion extends Enum<WritableTypeId$Inclusion> {
    static METADATA_PROPERTY: WritableTypeId$Inclusion;
    static PARENT_PROPERTY: WritableTypeId$Inclusion;
    static WRAPPER_ARRAY: WritableTypeId$Inclusion;
    static WRAPPER_OBJECT: WritableTypeId$Inclusion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WritableTypeId$Inclusion;
    static values(): WritableTypeId$Inclusion[];
    private constructor()
    name(): "WRAPPER_ARRAY" | "WRAPPER_OBJECT" | "METADATA_PROPERTY" | "PARENT_PROPERTY";
}