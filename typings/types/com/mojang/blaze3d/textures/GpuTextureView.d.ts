import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GpuTextureView extends Object implements AutoCloseable {
    constructor(texture: GpuTexture, baseMipLevel: number, mipLevels: number)
    // private baseMipLevel: number;
    // private mipLevels: number;
    // private texture: GpuTexture;
    baseMipLevel(): number;
    close(): void;
    getHeight(mipLevel: number): number;
    getWidth(mipLevel: number): number;
    isClosed(): boolean;
    mipLevels(): number;
    texture(): GpuTexture;
}