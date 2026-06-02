import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Tag_Type extends Enum<Tag_Type> {
    static Byte: Tag_Type;
    static ByteArray: Tag_Type;
    static Compound: Tag_Type;
    static Double: Tag_Type;
    static End: Tag_Type;
    static Float: Tag_Type;
    static Int: Tag_Type;
    static Int64: Tag_Type;
    static IntArray: Tag_Type;
    static List: Tag_Type;
    static Short: Tag_Type;
    static String: Tag_Type;
    static getByName(paramarg0: string): Tag_Type;
    static getByName(paramarg0: string, paramarg1: Tag_Type): Tag_Type;
    static getByValue(paramarg0: number): Tag_Type;
    static getByValue(paramarg0: number, paramarg1: Tag_Type): Tag_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Tag_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: Tag_Type)
    readonly value: number;
    getValue(): number;
    name(): "End" | "Byte" | "Short" | "Int" | "Int64" | "Float" | "Double" | "ByteArray" | "String" | "List" | "Compound" | "IntArray";
}