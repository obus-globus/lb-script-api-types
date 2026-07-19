import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlyphAtlasTextureKt extends Object {
    static copyCoverageToNativeImage(self: BufferedImage, target: NativeImage, sourceX: number, sourceY: number, targetX: number, targetY: number, width: number, height: number, scratchBuffer: number[]): number[];
    static toLuminanceNativeImage(self: BufferedImage): NativeImage;
}