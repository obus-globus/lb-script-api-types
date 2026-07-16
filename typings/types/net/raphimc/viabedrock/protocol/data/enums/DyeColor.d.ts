import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DyeColor extends Enum<DyeColor> {
    static BLACK: DyeColor;
    static BLUE: DyeColor;
    static BROWN: DyeColor;
    static CYAN: DyeColor;
    static GRAY: DyeColor;
    static GREEN: DyeColor;
    static LIGHT_BLUE: DyeColor;
    static LIGHT_GRAY: DyeColor;
    static LIME: DyeColor;
    static MAGENTA: DyeColor;
    static ORANGE: DyeColor;
    static PINK: DyeColor;
    static PURPLE: DyeColor;
    static RED: DyeColor;
    static WHITE: DyeColor;
    static YELLOW: DyeColor;
    static getByBedrockId(paramarg0: number): DyeColor;
    static getByBedrockId(paramarg0: number, paramarg1: DyeColor): DyeColor;
    static getByJavaId(paramarg0: number): DyeColor;
    static getByJavaId(paramarg0: number, paramarg1: DyeColor): DyeColor;
    static getClosestDyeColor(paramarg0: number): DyeColor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DyeColor;
    static values(): DyeColor[];
    private constructor(arg2: number)
    // private signColor: number;
    bedrockId(): number;
    javaId(): number;
    signColor(): number;
    name(): "WHITE" | "ORANGE" | "MAGENTA" | "LIGHT_BLUE" | "YELLOW" | "LIME" | "PINK" | "GRAY" | "LIGHT_GRAY" | "CYAN" | "PURPLE" | "BLUE" | "BROWN" | "GREEN" | "RED" | "BLACK";
}