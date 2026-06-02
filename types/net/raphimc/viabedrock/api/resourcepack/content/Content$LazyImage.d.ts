import type { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Content$LazyImage extends Object {
    constructor(arg0: number[], arg1: string)
    // private bytes: number[];
    // private format: string;
    readonly image: BufferedImage;
    getImage(): BufferedImage;
    getPngBytes(): number[];
    getPngBytes(arg0: boolean): number[];
}