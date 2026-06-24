import type { GpuBuffer } from '../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BitmapProvider$ImageDataHolder extends Object implements AutoCloseable {
    private constructor(identifier: Identifier, image: NativeImage)
    // private gpuBuffer: GpuBuffer;
    // private identifier: Identifier;
    // private image: NativeImage;
    close(): void;
    // private gpuData(): GpuBuffer;
}