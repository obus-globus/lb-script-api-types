import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Window$Type extends Enum<Window$Type> {
    static NORMAL: Window$Type;
    static POPUP: Window$Type;
    static UTILITY: Window$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Window$Type;
    static values(): Window$Type[];
    private constructor()
    name(): "NORMAL" | "UTILITY" | "POPUP";
}