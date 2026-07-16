import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Image$Interpolation extends Enum<Image$Interpolation> {
    static AREA: Image$Interpolation;
    static BICUBIC: Image$Interpolation;
    static BILINEAR: Image$Interpolation;
    static NEAREST: Image$Interpolation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Image$Interpolation;
    static values(): Image$Interpolation[];
    private constructor()
    name(): "NEAREST" | "BILINEAR" | "AREA" | "BICUBIC";
}