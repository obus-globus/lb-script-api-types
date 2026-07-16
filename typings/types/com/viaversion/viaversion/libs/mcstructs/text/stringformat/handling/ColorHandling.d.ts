import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ColorHandling extends Enum<ColorHandling> {
    static FORMATTING: ColorHandling;
    static RESET: ColorHandling;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ColorHandling;
    static values(): ColorHandling[];
    private constructor()
    name(): "RESET" | "FORMATTING";
}