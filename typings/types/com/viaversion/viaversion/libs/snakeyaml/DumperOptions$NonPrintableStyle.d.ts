import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$NonPrintableStyle extends Enum<DumperOptions$NonPrintableStyle> {
    static BINARY: DumperOptions$NonPrintableStyle;
    static ESCAPE: DumperOptions$NonPrintableStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DumperOptions$NonPrintableStyle;
    static values(): DumperOptions$NonPrintableStyle[];
    private constructor()
    name(): "BINARY" | "ESCAPE";
}