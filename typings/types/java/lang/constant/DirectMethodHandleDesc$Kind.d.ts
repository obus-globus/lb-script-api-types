import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DirectMethodHandleDesc$Kind extends Enum<DirectMethodHandleDesc$Kind> {
    static CONSTRUCTOR: DirectMethodHandleDesc$Kind;
    static GETTER: DirectMethodHandleDesc$Kind;
    static INTERFACE_SPECIAL: DirectMethodHandleDesc$Kind;
    static INTERFACE_STATIC: DirectMethodHandleDesc$Kind;
    static INTERFACE_VIRTUAL: DirectMethodHandleDesc$Kind;
    static SETTER: DirectMethodHandleDesc$Kind;
    static SPECIAL: DirectMethodHandleDesc$Kind;
    static STATIC: DirectMethodHandleDesc$Kind;
    static STATIC_GETTER: DirectMethodHandleDesc$Kind;
    static STATIC_SETTER: DirectMethodHandleDesc$Kind;
    static VIRTUAL: DirectMethodHandleDesc$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): DirectMethodHandleDesc$Kind;
    static valueOf(paramarg0: number, paramarg1: boolean): DirectMethodHandleDesc$Kind;
    static valueOf(paramarg0: string): DirectMethodHandleDesc$Kind;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: number, arg3: boolean)
    isInterface: boolean;
    refKind: number;
    name(): "STATIC" | "INTERFACE_STATIC" | "VIRTUAL" | "INTERFACE_VIRTUAL" | "SPECIAL" | "INTERFACE_SPECIAL" | "CONSTRUCTOR" | "GETTER" | "SETTER" | "STATIC_GETTER" | "STATIC_SETTER";
}