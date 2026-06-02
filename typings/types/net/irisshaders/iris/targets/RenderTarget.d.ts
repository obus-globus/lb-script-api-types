import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlSampler } from '../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { InternalTextureFormat } from '../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { RenderTarget$Builder } from '../../../../net/irisshaders/iris/targets/RenderTarget$Builder.d.ts'
import type { Vector2i } from '../../../../org/joml/Vector2i.d.ts'
export class RenderTarget extends Object {
    static builder(): RenderTarget$Builder;
    constructor(arg0: RenderTarget$Builder)
    // private allowsLinear: boolean;
    readonly altTexture: number;
    // private format: PixelFormat;
    readonly height: number;
    readonly internalFormat: InternalTextureFormat;
    // private isValid: boolean;
    readonly mainTexture: number;
    // private mipmapsOnAlt: boolean;
    // private mipmapsOnMain: boolean;
    // private name: string;
    // private type: PixelType;
    readonly width: number;
    destroy(): void;
    getAltSampler(): GlSampler;
    getAltTexture(): number;
    getHeight(): number;
    getInternalFormat(): InternalTextureFormat;
    getMainSampler(): GlSampler;
    getMainTexture(): number;
    getWidth(): number;
    // private requireValid(): void;
    resize(arg0: number, arg1: number): void;
    resize(arg0: Vector2i): void;
    // private resizeTexture(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    // private setupTexture(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): void;
    turnOffMips(arg0: boolean): void;
    turnOnMips(arg0: boolean): void;
}