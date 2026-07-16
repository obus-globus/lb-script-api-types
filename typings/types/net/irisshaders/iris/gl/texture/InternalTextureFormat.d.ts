import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GlVersion } from '../../../../../net/irisshaders/iris/gl/GlVersion.d.ts'
import type { PixelFormat } from '../../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { ShaderDataType } from '../../../../../net/irisshaders/iris/gl/texture/ShaderDataType.d.ts'
export class InternalTextureFormat extends Enum<InternalTextureFormat> {
    static R11F_G11F_B10F: InternalTextureFormat;
    static R16: InternalTextureFormat;
    static R16F: InternalTextureFormat;
    static R16I: InternalTextureFormat;
    static R16UI: InternalTextureFormat;
    static R16_SNORM: InternalTextureFormat;
    static R32F: InternalTextureFormat;
    static R32I: InternalTextureFormat;
    static R32UI: InternalTextureFormat;
    static R3_G3_B2: InternalTextureFormat;
    static R8: InternalTextureFormat;
    static R8I: InternalTextureFormat;
    static R8UI: InternalTextureFormat;
    static R8_SNORM: InternalTextureFormat;
    static RG16: InternalTextureFormat;
    static RG16F: InternalTextureFormat;
    static RG16I: InternalTextureFormat;
    static RG16UI: InternalTextureFormat;
    static RG16_SNORM: InternalTextureFormat;
    static RG32F: InternalTextureFormat;
    static RG32I: InternalTextureFormat;
    static RG32UI: InternalTextureFormat;
    static RG8: InternalTextureFormat;
    static RG8I: InternalTextureFormat;
    static RG8UI: InternalTextureFormat;
    static RG8_SNORM: InternalTextureFormat;
    static RGB10_A2: InternalTextureFormat;
    static RGB10_A2UI: InternalTextureFormat;
    static RGB16: InternalTextureFormat;
    static RGB16F: InternalTextureFormat;
    static RGB16I: InternalTextureFormat;
    static RGB16UI: InternalTextureFormat;
    static RGB16_SNORM: InternalTextureFormat;
    static RGB32F: InternalTextureFormat;
    static RGB32I: InternalTextureFormat;
    static RGB32UI: InternalTextureFormat;
    static RGB565: InternalTextureFormat;
    static RGB5_A1: InternalTextureFormat;
    static RGB8: InternalTextureFormat;
    static RGB8I: InternalTextureFormat;
    static RGB8UI: InternalTextureFormat;
    static RGB8_SNORM: InternalTextureFormat;
    static RGB9_E5: InternalTextureFormat;
    static RGBA: InternalTextureFormat;
    static RGBA16: InternalTextureFormat;
    static RGBA16F: InternalTextureFormat;
    static RGBA16I: InternalTextureFormat;
    static RGBA16UI: InternalTextureFormat;
    static RGBA16_SNORM: InternalTextureFormat;
    static RGBA2: InternalTextureFormat;
    static RGBA32F: InternalTextureFormat;
    static RGBA32I: InternalTextureFormat;
    static RGBA32UI: InternalTextureFormat;
    static RGBA4: InternalTextureFormat;
    static RGBA8: InternalTextureFormat;
    static RGBA8I: InternalTextureFormat;
    static RGBA8UI: InternalTextureFormat;
    static RGBA8_SNORM: InternalTextureFormat;
    static fromString(paramarg0: string): Optional<InternalTextureFormat>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InternalTextureFormat;
    static values(): InternalTextureFormat[];
    private constructor(arg2: number, arg3: GlVersion, arg4: PixelFormat, arg5: ShaderDataType)
    // private expectedPixelFormat: PixelFormat;
    readonly glFormat: number;
    readonly minimumGlVersion: GlVersion;
    readonly shaderDataType: ShaderDataType;
    getGlFormat(): number;
    getMinimumGlVersion(): GlVersion;
    getPixelFormat(): PixelFormat;
    getShaderDataType(): ShaderDataType;
    name(): "RGBA" | "R8" | "RG8" | "RGB8" | "RGBA8" | "R8_SNORM" | "RG8_SNORM" | "RGB8_SNORM" | "RGBA8_SNORM" | "R16" | "RG16" | "RGB16" | "RGBA16" | "R16_SNORM" | "RG16_SNORM" | "RGB16_SNORM" | "RGBA16_SNORM" | "R16F" | "RG16F" | "RGB16F" | "RGBA16F" | "R32F" | "RG32F" | "RGB32F" | "RGBA32F" | "R8I" | "RG8I" | "RGB8I" | "RGBA8I" | "R8UI" | "RG8UI" | "RGB8UI" | "RGBA8UI" | "R16I" | "RG16I" | "RGB16I" | "RGBA16I" | "R16UI" | "RG16UI" | "RGB16UI" | "RGBA16UI" | "R32I" | "RG32I" | "RGB32I" | "RGBA32I" | "R32UI" | "RG32UI" | "RGB32UI" | "RGBA32UI" | "RGBA2" | "RGBA4" | "R3_G3_B2" | "RGB5_A1" | "RGB565" | "RGB10_A2" | "RGB10_A2UI" | "R11F_G11F_B10F" | "RGB9_E5";
}