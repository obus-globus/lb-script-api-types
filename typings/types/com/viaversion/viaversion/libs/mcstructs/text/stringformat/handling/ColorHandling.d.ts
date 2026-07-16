import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ColorHandling extends Enum<ColorHandling> {
    static FORMATTING: ColorHandling;
    static RESET: ColorHandling;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ColorHandling;
    static values(): ColorHandling[];
    private constructor()
    name(): "RESET" | "FORMATTING";
}