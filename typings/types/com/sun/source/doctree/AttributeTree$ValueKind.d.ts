import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AttributeTree$ValueKind extends Enum<AttributeTree$ValueKind> {
    static DOUBLE: AttributeTree$ValueKind;
    static EMPTY: AttributeTree$ValueKind;
    static SINGLE: AttributeTree$ValueKind;
    static UNQUOTED: AttributeTree$ValueKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AttributeTree$ValueKind;
    static values(): AttributeTree$ValueKind[];
    private constructor()
    name(): "EMPTY" | "UNQUOTED" | "SINGLE" | "DOUBLE";
}