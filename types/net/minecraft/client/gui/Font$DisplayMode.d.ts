import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Font$DisplayMode extends Enum<Font$DisplayMode> {
    static NORMAL: Font$DisplayMode;
    static POLYGON_OFFSET: Font$DisplayMode;
    static SEE_THROUGH: Font$DisplayMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Font$DisplayMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "NORMAL" | "SEE_THROUGH" | "POLYGON_OFFSET";
}