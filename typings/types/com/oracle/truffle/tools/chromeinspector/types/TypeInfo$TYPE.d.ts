import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TypeInfo$TYPE extends Enum<TypeInfo$TYPE> {
    static BOOLEAN: TypeInfo$TYPE;
    static FUNCTION: TypeInfo$TYPE;
    static NUMBER: TypeInfo$TYPE;
    static OBJECT: TypeInfo$TYPE;
    static STRING: TypeInfo$TYPE;
    static SYMBOL: TypeInfo$TYPE;
    static UNDEFINED: TypeInfo$TYPE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TypeInfo$TYPE;
    static values(): TypeInfo$TYPE[];
    private constructor(id: string)
    // private id: string;
    getId(): string;
    name(): "OBJECT" | "FUNCTION" | "UNDEFINED" | "STRING" | "NUMBER" | "BOOLEAN" | "SYMBOL";
}