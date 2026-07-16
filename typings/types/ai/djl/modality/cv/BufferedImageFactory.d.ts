import type { Image } from '../../../../ai/djl/modality/cv/Image.d.ts'
import type { ImageFactory } from '../../../../ai/djl/modality/cv/ImageFactory.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { BufferedImage } from '../../../../java/awt/image/BufferedImage.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BufferedImageFactory extends ImageFactory {
    static getInstance(): ImageFactory;
    static setImageFactory(paramarg0: ImageFactory): void;
    constructor()
    fromFile(arg0: Path): Image;
    fromImage(arg0: Object): Image;
    fromInputStream(arg0: InputStream): Image;
    fromNDArray(arg0: NDArray): Image;
    fromPixels(arg0: number[], arg1: number, arg2: number): Image;
    save(arg0: BufferedImage, arg1: OutputStream, arg2: string): void;
}