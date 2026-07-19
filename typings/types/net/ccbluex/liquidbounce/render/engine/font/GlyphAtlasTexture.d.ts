import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { AbstractTexture } from '../../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class GlyphAtlasTexture extends AbstractTexture {
    constructor(label: () => string, pixels: NativeImage, retainPixels: boolean)
    readonly pixels: NativeImage | null;
    close(): void;
    upload(): void;
    // private upload(source: NativeImage): void;
    uploadRect(mipLevel: number, x: number, y: number, width: number, height: number): void;
}