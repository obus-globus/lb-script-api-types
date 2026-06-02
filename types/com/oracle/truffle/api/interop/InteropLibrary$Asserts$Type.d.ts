import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InteropLibrary$Asserts$Type extends Enum<InteropLibrary$Asserts$Type> {
    static BOOLEAN: InteropLibrary$Asserts$Type;
    static DATE_TIME_ZONE: InteropLibrary$Asserts$Type;
    static DURATION: InteropLibrary$Asserts$Type;
    static ITERATOR: InteropLibrary$Asserts$Type;
    static META_OBJECT: InteropLibrary$Asserts$Type;
    static NULL: InteropLibrary$Asserts$Type;
    static NUMBER: InteropLibrary$Asserts$Type;
    static POINTER: InteropLibrary$Asserts$Type;
    static STRING: InteropLibrary$Asserts$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InteropLibrary$Asserts$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "NULL" | "BOOLEAN" | "DATE_TIME_ZONE" | "DURATION" | "STRING" | "NUMBER" | "POINTER" | "META_OBJECT" | "ITERATOR";
}