import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Font$DisplayMode extends Enum<Font$DisplayMode> {
    static NORMAL: Font$DisplayMode;
    static POLYGON_OFFSET: Font$DisplayMode;
    static SEE_THROUGH: Font$DisplayMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Font$DisplayMode;
    static values(): Font$DisplayMode[];
    private constructor()
    name(): "NORMAL" | "SEE_THROUGH" | "POLYGON_OFFSET";
}