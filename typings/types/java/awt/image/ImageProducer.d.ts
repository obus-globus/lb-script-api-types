import type { ImageConsumer } from '../../../java/awt/image/ImageConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ImageProducer extends Object{
    addConsumer(arg0: ImageConsumer): void;
    isConsumer(arg0: ImageConsumer): boolean;
    removeConsumer(arg0: ImageConsumer): void;
    requestTopDownLeftRightResend(arg0: ImageConsumer): void;
    startProduction(arg0: ImageConsumer): void;
}