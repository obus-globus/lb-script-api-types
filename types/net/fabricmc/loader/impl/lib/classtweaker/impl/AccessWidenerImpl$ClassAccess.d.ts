import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { AccessWidener$Access } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener$Access.d.ts'
import type { AccessWidenerImpl$AccessOperator } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/AccessWidenerImpl$AccessOperator.d.ts'
import type { AccessWidenerImpl$MutableAccess } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/AccessWidenerImpl$MutableAccess.d.ts'
export class AccessWidenerImpl$ClassAccess extends Enum<AccessWidenerImpl$ClassAccess> implements AccessWidenerImpl$MutableAccess {
    static ACCESSIBLE: AccessWidenerImpl$ClassAccess;
    static ACCESSIBLE_EXTENDABLE: AccessWidenerImpl$ClassAccess;
    static DEFAULT: AccessWidener$Access;
    static DEFAULT: AccessWidenerImpl$ClassAccess;
    static EXTENDABLE: AccessWidenerImpl$ClassAccess;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AccessWidenerImpl$ClassAccess;
    static values(): (Object | null)[];
    private constructor(arg2: (param0: number, param1: string, param2: number) => kotlin.Int)
    // private operator: (param0: number, param1: string, param2: number) => kotlin.Int;
    apply(arg0: number, arg1: string, arg2: number): number;
    isAccessible(): boolean;
    isExtendable(): boolean;
    isMutable(): boolean;
    makeAccessible(): AccessWidenerImpl$MutableAccess;
    makeExtendable(): AccessWidenerImpl$MutableAccess;
    makeMutable(): AccessWidenerImpl$MutableAccess;
    name(): "DEFAULT" | "ACCESSIBLE" | "EXTENDABLE" | "ACCESSIBLE_EXTENDABLE";
}