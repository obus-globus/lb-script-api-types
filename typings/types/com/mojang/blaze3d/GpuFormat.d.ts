import type { GpuFormat$ComponentType } from '../../../com/mojang/blaze3d/GpuFormat$ComponentType.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class GpuFormat extends Enum<GpuFormat> {
    static D16_UNORM: GpuFormat;
    static D24_UNORM_S8_UINT: GpuFormat;
    static D32_FLOAT: GpuFormat;
    static D32_FLOAT_S8_UINT: GpuFormat;
    static R16_FLOAT: GpuFormat;
    static R16_SINT: GpuFormat;
    static R16_SNORM: GpuFormat;
    static R16_UINT: GpuFormat;
    static R16_UNORM: GpuFormat;
    static R32_FLOAT: GpuFormat;
    static R32_SINT: GpuFormat;
    static R32_UINT: GpuFormat;
    static R8_SINT: GpuFormat;
    static R8_SNORM: GpuFormat;
    static R8_UINT: GpuFormat;
    static R8_UNORM: GpuFormat;
    static RG11B10_FLOAT: GpuFormat;
    static RG16_FLOAT: GpuFormat;
    static RG16_SINT: GpuFormat;
    static RG16_SNORM: GpuFormat;
    static RG16_UINT: GpuFormat;
    static RG16_UNORM: GpuFormat;
    static RG32_FLOAT: GpuFormat;
    static RG32_SINT: GpuFormat;
    static RG32_UINT: GpuFormat;
    static RG8_SINT: GpuFormat;
    static RG8_SNORM: GpuFormat;
    static RG8_UINT: GpuFormat;
    static RG8_UNORM: GpuFormat;
    static RGB10A2_UINT: GpuFormat;
    static RGB10A2_UNORM: GpuFormat;
    static RGB16_FLOAT: GpuFormat;
    static RGB16_SINT: GpuFormat;
    static RGB16_SNORM: GpuFormat;
    static RGB16_UINT: GpuFormat;
    static RGB16_UNORM: GpuFormat;
    static RGB32_FLOAT: GpuFormat;
    static RGB32_SINT: GpuFormat;
    static RGB32_UINT: GpuFormat;
    static RGB8_SINT: GpuFormat;
    static RGB8_SNORM: GpuFormat;
    static RGB8_UINT: GpuFormat;
    static RGB8_UNORM: GpuFormat;
    static RGBA16_FLOAT: GpuFormat;
    static RGBA16_SINT: GpuFormat;
    static RGBA16_SNORM: GpuFormat;
    static RGBA16_UINT: GpuFormat;
    static RGBA16_UNORM: GpuFormat;
    static RGBA32_FLOAT: GpuFormat;
    static RGBA32_SINT: GpuFormat;
    static RGBA32_UINT: GpuFormat;
    static RGBA8_SINT: GpuFormat;
    static RGBA8_SNORM: GpuFormat;
    static RGBA8_UINT: GpuFormat;
    static RGBA8_UNORM: GpuFormat;
    static S8_UINT: GpuFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GpuFormat;
    static values(): GpuFormat[];
    private constructor(componentType: GpuFormat$ComponentType, componentCount: number)
    // private componentCount: number;
    // private componentType: GpuFormat$ComponentType;
    blockSize(): number;
    byteAlignment(): number;
    componentCount(): number;
    componentType(): GpuFormat$ComponentType;
    hasColorAspect(): boolean;
    hasDepthAspect(): boolean;
    hasStencilAspect(): boolean;
    name(): "R8_UNORM" | "R8_SNORM" | "RG8_UNORM" | "RG8_SNORM" | "RGB8_UNORM" | "RGB8_SNORM" | "RGBA8_UNORM" | "RGBA8_SNORM" | "R16_UNORM" | "R16_SNORM" | "RG16_UNORM" | "RG16_SNORM" | "RGB16_UNORM" | "RGB16_SNORM" | "RGBA16_UNORM" | "RGBA16_SNORM" | "R8_UINT" | "R8_SINT" | "RG8_UINT" | "RG8_SINT" | "RGB8_UINT" | "RGB8_SINT" | "RGBA8_UINT" | "RGBA8_SINT" | "R16_UINT" | "R16_SINT" | "RG16_UINT" | "RG16_SINT" | "RGB16_UINT" | "RGB16_SINT" | "RGBA16_UINT" | "RGBA16_SINT" | "R32_UINT" | "R32_SINT" | "RG32_UINT" | "RG32_SINT" | "RGB32_UINT" | "RGB32_SINT" | "RGBA32_UINT" | "RGBA32_SINT" | "R16_FLOAT" | "RG16_FLOAT" | "RGB16_FLOAT" | "RGBA16_FLOAT" | "R32_FLOAT" | "RG32_FLOAT" | "RGB32_FLOAT" | "RGBA32_FLOAT" | "RGB10A2_UNORM" | "RGB10A2_UINT" | "RG11B10_FLOAT" | "D32_FLOAT" | "D32_FLOAT_S8_UINT" | "D24_UNORM_S8_UINT" | "D16_UNORM" | "S8_UINT";
}