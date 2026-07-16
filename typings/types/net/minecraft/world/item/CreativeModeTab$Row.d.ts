import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CreativeModeTab$Row extends Enum<CreativeModeTab$Row> {
    static BOTTOM: CreativeModeTab$Row;
    static TOP: CreativeModeTab$Row;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CreativeModeTab$Row;
    static values(): CreativeModeTab$Row[];
    private constructor()
    name(): "TOP" | "BOTTOM";
}