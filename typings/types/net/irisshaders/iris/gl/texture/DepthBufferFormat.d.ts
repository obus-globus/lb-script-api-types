import type { GpuFormat } from '../../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DepthBufferFormat extends Enum<DepthBufferFormat> {
    static DEPTH16: DepthBufferFormat;
    static DEPTH24_STENCIL8: DepthBufferFormat;
    static DEPTH32F: DepthBufferFormat;
    static DEPTH32F_STENCIL8: DepthBufferFormat;
    static fromGlEnum(paramarg0: number): DepthBufferFormat;
    static fromGlEnumOrDefault(paramarg0: number): DepthBufferFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DepthBufferFormat;
    static values(): DepthBufferFormat[];
    private constructor(arg2: boolean)
    readonly combinedStencil: boolean;
    getGlFormat(): number;
    getGlInternalFormat(): number;
    getGlType(): number;
    isCombinedStencil(): boolean;
    toMojang(): GpuFormat;
    name(): "DEPTH16" | "DEPTH32F" | "DEPTH24_STENCIL8" | "DEPTH32F_STENCIL8";
}