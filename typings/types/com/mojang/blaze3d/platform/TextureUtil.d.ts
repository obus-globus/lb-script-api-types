import type { NativeImage } from '../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { IntUnaryOperator } from '../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextureUtil extends Object {
    static MIN_MIPMAP_LEVEL: number;
    static fillEmptyAreasWithDarkColor(paramimage: NativeImage): void;
    static getDebugTexturePath(): Path;
    static getDebugTexturePath(paramroot: Path): Path;
    static readResource(paraminputStream: InputStream): ByteBuffer;
    static solidify(paramimage: NativeImage): void;
    static writeAsPNG(paramdir: Path, paramprefix: string, paramtexture: GpuTexture, parammaxMipLevel: number, parampixelModifier: (param0: number) => number): void;
    constructor()
}