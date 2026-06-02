import type { BufferCapabilities } from '../../java/awt/BufferCapabilities.d.ts'
import type { GraphicsDevice } from '../../java/awt/GraphicsDevice.d.ts'
import type { ImageCapabilities } from '../../java/awt/ImageCapabilities.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { BufferedImage } from '../../java/awt/image/BufferedImage.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { VolatileImage } from '../../java/awt/image/VolatileImage.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class GraphicsConfiguration extends Object {
    constructor()
    createCompatibleImage(arg0: number, arg1: number): BufferedImage;
    createCompatibleImage(arg0: number, arg1: number, arg2: number): BufferedImage;
    createCompatibleVolatileImage(arg0: number, arg1: number): VolatileImage;
    createCompatibleVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities): VolatileImage;
    createCompatibleVolatileImage(arg0: number, arg1: number, arg2: ImageCapabilities, arg3: number): VolatileImage;
    createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): VolatileImage;
    getBounds(): Rectangle;
    getBufferCapabilities(): BufferCapabilities;
    getColorModel(): ColorModel;
    getColorModel(arg0: number): ColorModel;
    getDefaultTransform(): AffineTransform;
    getDevice(): GraphicsDevice;
    getImageCapabilities(): ImageCapabilities;
    getNormalizingTransform(): AffineTransform;
    isTranslucencyCapable(): boolean;
}