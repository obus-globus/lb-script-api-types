import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GpuTextureInterface } from '../../../../net/irisshaders/iris/mixinterface/GpuTextureInterface.d.ts'
export abstract class GpuTexture extends Object implements AutoCloseable, GpuTextureInterface {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_CUBEMAP_COMPATIBLE: number;
    static USAGE_RENDER_ATTACHMENT: number;
    static USAGE_TEXTURE_BINDING: number;
    constructor(usage: number, label: string, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number)
    readonly depthOrLayers: number;
    readonly format: GpuFormat;
    readonly height: number;
    readonly label: string;
    readonly mipLevels: number;
    // private usage: number;
    readonly width: number;
    close(): void;
    getDepthOrLayers(): number;
    getFormat(): GpuFormat;
    getHeight(mipLevel: number): number;
    getLabel(): string;
    getMipLevels(): number;
    getWidth(mipLevel: number): number;
    iris$getGlId(): number;
    iris$markMipmapNonLinear(): void;
    isClosed(): boolean;
    usage(): number;
}