import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GlVersion } from '../../../../../net/irisshaders/iris/gl/GlVersion.d.ts'
export class PixelFormat extends Enum<PixelFormat> {
    static BGR: PixelFormat;
    static BGRA: PixelFormat;
    static BGRA_INTEGER: PixelFormat;
    static BGR_INTEGER: PixelFormat;
    static RED: PixelFormat;
    static RED_INTEGER: PixelFormat;
    static RG: PixelFormat;
    static RGB: PixelFormat;
    static RGBA: PixelFormat;
    static RGBA_INTEGER: PixelFormat;
    static RGB_INTEGER: PixelFormat;
    static RG_INTEGER: PixelFormat;
    static fromString(paramarg0: string): Optional<PixelFormat>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PixelFormat;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number, arg4: GlVersion, arg5: boolean)
    readonly componentCount: number;
    readonly glFormat: number;
    // private isInteger: boolean;
    readonly minimumGlVersion: GlVersion;
    getComponentCount(): number;
    getGlFormat(): number;
    getMinimumGlVersion(): GlVersion;
    isInteger(): boolean;
    name(): "RED" | "RG" | "RGB" | "BGR" | "RGBA" | "BGRA" | "RED_INTEGER" | "RG_INTEGER" | "RGB_INTEGER" | "BGR_INTEGER" | "RGBA_INTEGER" | "BGRA_INTEGER";
}