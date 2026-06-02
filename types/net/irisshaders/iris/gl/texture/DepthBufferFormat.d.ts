import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DepthBufferFormat extends Enum<DepthBufferFormat> {
    static DEPTH: DepthBufferFormat;
    static DEPTH16: DepthBufferFormat;
    static DEPTH24: DepthBufferFormat;
    static DEPTH24_STENCIL8: DepthBufferFormat;
    static DEPTH32: DepthBufferFormat;
    static DEPTH32F: DepthBufferFormat;
    static DEPTH32F_STENCIL8: DepthBufferFormat;
    static DEPTH_STENCIL: DepthBufferFormat;
    static fromGlEnum(paramarg0: number): DepthBufferFormat;
    static fromGlEnumOrDefault(paramarg0: number): DepthBufferFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DepthBufferFormat;
    static values(): (Object | null)[];
    private constructor(arg2: boolean)
    readonly combinedStencil: boolean;
    getGlFormat(): number;
    getGlInternalFormat(): number;
    getGlType(): number;
    isCombinedStencil(): boolean;
    name(): "DEPTH" | "DEPTH16" | "DEPTH24" | "DEPTH32" | "DEPTH32F" | "DEPTH_STENCIL" | "DEPTH24_STENCIL8" | "DEPTH32F_STENCIL8";
}