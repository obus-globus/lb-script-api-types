import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
export class SpecialGenericSignatures$TypeSafeBarrierDescription extends Enum<SpecialGenericSignatures$TypeSafeBarrierDescription> {
    static FALSE: SpecialGenericSignatures$TypeSafeBarrierDescription;
    static INDEX: SpecialGenericSignatures$TypeSafeBarrierDescription;
    static MAP_GET_OR_DEFAULT: SpecialGenericSignatures$TypeSafeBarrierDescription;
    static NULL: SpecialGenericSignatures$TypeSafeBarrierDescription;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SpecialGenericSignatures$TypeSafeBarrierDescription;
    static values(): SpecialGenericSignatures$TypeSafeBarrierDescription[];
    constructor(arg2: Object, arg3: DefaultConstructorMarker)
    // private defaultValue: Object;
    name(): "NULL" | "INDEX" | "FALSE" | "MAP_GET_OR_DEFAULT";
}