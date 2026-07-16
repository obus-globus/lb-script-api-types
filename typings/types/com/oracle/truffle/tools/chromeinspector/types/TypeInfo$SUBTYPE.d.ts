import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TypeInfo$SUBTYPE extends Enum<TypeInfo$SUBTYPE> {
    static ARRAY: TypeInfo$SUBTYPE;
    static DATE: TypeInfo$SUBTYPE;
    static INTERNAL_ENTRY: TypeInfo$SUBTYPE;
    static ITERATOR: TypeInfo$SUBTYPE;
    static MAP: TypeInfo$SUBTYPE;
    static NULL: TypeInfo$SUBTYPE;
    static SET: TypeInfo$SUBTYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TypeInfo$SUBTYPE;
    static values(): TypeInfo$SUBTYPE[];
    private constructor(id: string)
    // private id: string;
    getId(): string;
    name(): "ARRAY" | "NULL" | "DATE" | "MAP" | "SET" | "ITERATOR" | "INTERNAL_ENTRY";
}