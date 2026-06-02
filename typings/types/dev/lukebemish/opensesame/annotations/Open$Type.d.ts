import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Open$Type extends Enum<Open$Type> {
    static ARRAY: Open$Type;
    static CONSTRUCT: Open$Type;
    static GET_INSTANCE: Open$Type;
    static GET_STATIC: Open$Type;
    static SET_INSTANCE: Open$Type;
    static SET_STATIC: Open$Type;
    static SPECIAL: Open$Type;
    static STATIC: Open$Type;
    static VIRTUAL: Open$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Open$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "STATIC" | "VIRTUAL" | "SPECIAL" | "GET_STATIC" | "GET_INSTANCE" | "SET_STATIC" | "SET_INSTANCE" | "CONSTRUCT" | "ARRAY";
}