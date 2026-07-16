import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { AccessWidenerImpl$AccessOperator } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/AccessWidenerImpl$AccessOperator.d.ts'
import type { AccessWidenerImpl$MutableAccess } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/impl/AccessWidenerImpl$MutableAccess.d.ts'
export class AccessWidenerImpl$FieldAccess extends Enum<AccessWidenerImpl$FieldAccess> implements AccessWidenerImpl$MutableAccess {
    static ACCESSIBLE: AccessWidenerImpl$FieldAccess;
    static ACCESSIBLE_MUTABLE: AccessWidenerImpl$FieldAccess;
    static DEFAULT: AccessWidenerImpl$FieldAccess;
    static MUTABLE: AccessWidenerImpl$FieldAccess;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AccessWidenerImpl$FieldAccess;
    static values(): AccessWidenerImpl$FieldAccess[];
    private constructor(arg2: (param0: number, param1: string, param2: number) => number)
    // private operator: (param0: number, param1: string, param2: number) => number;
    apply(arg0: number, arg1: string, arg2: number): number;
    isAccessible(): boolean;
    isChanged(): boolean;
    isExtendable(): boolean;
    isMutable(): boolean;
    makeAccessible(): AccessWidenerImpl$MutableAccess;
    makeExtendable(): AccessWidenerImpl$MutableAccess;
    makeMutable(): AccessWidenerImpl$MutableAccess;
    name(): "DEFAULT" | "ACCESSIBLE" | "MUTABLE" | "ACCESSIBLE_MUTABLE";
}