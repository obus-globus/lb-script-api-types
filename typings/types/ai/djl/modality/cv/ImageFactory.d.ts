import type { Image } from '../../../../ai/djl/modality/cv/Image.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ImageFactory extends Object {
    static getInstance(): ImageFactory;
    static setImageFactory(paramarg0: ImageFactory): void;
    constructor()
    fromFile(arg0: Path): Image;
    fromImage(arg0: Object): Image;
    fromInputStream(arg0: InputStream): Image;
    fromNDArray(arg0: NDArray): Image;
    fromPixels(arg0: number[], arg1: number, arg2: number): Image;
    fromUrl(arg0: URL): Image;
    fromUrl(arg0: string): Image;
}