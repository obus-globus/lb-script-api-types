import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Dumpable } from '../../../../../net/minecraft/client/renderer/texture/Dumpable.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class DynamicTexture extends AbstractTexture implements Dumpable {
    constructor(label: () => string, image: NativeImage)
    constructor(label: () => string, width: number, height: number, zero: boolean)
    constructor(label: string, width: number, height: number, zero: boolean)
    readonly pixels: NativeImage;
    close(): void;
    // private createTexture(label: () => string): void;
    // private createTexture(label: string): void;
    dumpContents(selfId: Identifier, dir: Path): void;
    getPixels(): NativeImage;
    setPixels(pixels: NativeImage): void;
    upload(): void;
}