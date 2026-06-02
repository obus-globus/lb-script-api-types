import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { ImageConsumer } from '../../../java/awt/image/ImageConsumer.d.ts'
import type { ImageProducer } from '../../../java/awt/image/ImageProducer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class OffScreenImageSource extends Object implements ImageProducer {
    constructor(arg0: BufferedImage)
    constructor(arg0: BufferedImage, arg1: Map<Object | null, Object | null>)
    // private height: number;
    // private image: BufferedImage;
    // private properties: Map<Object | null, Object | null>;
    // private theConsumer: ImageConsumer;
    // private width: number;
    addConsumer(arg0: ImageConsumer): void;
    isConsumer(arg0: ImageConsumer): boolean;
    // private produce(): void;
    removeConsumer(arg0: ImageConsumer): void;
    requestTopDownLeftRightResend(arg0: ImageConsumer): void;
    // private sendPixels(): void;
    startProduction(arg0: ImageConsumer): void;
}