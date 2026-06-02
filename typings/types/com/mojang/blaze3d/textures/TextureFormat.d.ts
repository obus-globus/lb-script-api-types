import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TextureFormat extends Enum<TextureFormat> {
    static DEPTH32: TextureFormat;
    static RED8: TextureFormat;
    static RED8I: TextureFormat;
    static RGBA8: TextureFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TextureFormat;
    static values(): (Object | null)[];
    private constructor(pixelSize: number)
    // private pixelSize: number;
    hasColorAspect(): boolean;
    hasDepthAspect(): boolean;
    pixelSize(): number;
    name(): "RGBA8" | "RED8" | "RED8I" | "DEPTH32";
}