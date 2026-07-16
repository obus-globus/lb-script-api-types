import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ArrayLiteralNode$ArrayContentType extends Enum<ArrayLiteralNode$ArrayContentType> {
    static Byte: ArrayLiteralNode$ArrayContentType;
    static ByteWithHoles: ArrayLiteralNode$ArrayContentType;
    static Double: ArrayLiteralNode$ArrayContentType;
    static DoubleWithHoles: ArrayLiteralNode$ArrayContentType;
    static Integer: ArrayLiteralNode$ArrayContentType;
    static IntegerWithHoles: ArrayLiteralNode$ArrayContentType;
    static Object: ArrayLiteralNode$ArrayContentType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ArrayLiteralNode$ArrayContentType;
    static values(): ArrayLiteralNode$ArrayContentType[];
    private constructor()
    name(): "Byte" | "ByteWithHoles" | "Integer" | "IntegerWithHoles" | "Double" | "DoubleWithHoles" | "Object";
}