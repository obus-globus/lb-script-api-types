import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$NonPrintableStyle extends Enum<DumperOptions$NonPrintableStyle> {
    static BINARY: DumperOptions$NonPrintableStyle;
    static ESCAPE: DumperOptions$NonPrintableStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumperOptions$NonPrintableStyle;
    static values(): (Object | null)[];
    private constructor()
    name(): "BINARY" | "ESCAPE";
}