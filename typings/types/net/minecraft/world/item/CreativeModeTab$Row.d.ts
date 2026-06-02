import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CreativeModeTab$Row extends Enum<CreativeModeTab$Row> {
    static BOTTOM: CreativeModeTab$Row;
    static TOP: CreativeModeTab$Row;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CreativeModeTab$Row;
    static values(): (Object | null)[];
    private constructor()
    name(): "TOP" | "BOTTOM";
}