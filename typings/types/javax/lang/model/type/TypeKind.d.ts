import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TypeKind extends Enum<TypeKind> {
    static ARRAY: TypeKind;
    static BOOLEAN: TypeKind;
    static BYTE: TypeKind;
    static CHAR: TypeKind;
    static DECLARED: TypeKind;
    static DOUBLE: TypeKind;
    static ERROR: TypeKind;
    static EXECUTABLE: TypeKind;
    static FLOAT: TypeKind;
    static INT: TypeKind;
    static INTERSECTION: TypeKind;
    static LONG: TypeKind;
    static MODULE: TypeKind;
    static NONE: TypeKind;
    static NULL: TypeKind;
    static OTHER: TypeKind;
    static PACKAGE: TypeKind;
    static SHORT: TypeKind;
    static TYPEVAR: TypeKind;
    static UNION: TypeKind;
    static VOID: TypeKind;
    static WILDCARD: TypeKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeKind;
    static values(): TypeKind[];
    private constructor()
    isPrimitive(): boolean;
    name(): "BOOLEAN" | "BYTE" | "SHORT" | "INT" | "LONG" | "CHAR" | "FLOAT" | "DOUBLE" | "VOID" | "NONE" | "NULL" | "ARRAY" | "DECLARED" | "ERROR" | "TYPEVAR" | "WILDCARD" | "PACKAGE" | "EXECUTABLE" | "OTHER" | "UNION" | "INTERSECTION" | "MODULE";
}