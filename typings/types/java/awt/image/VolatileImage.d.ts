import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Graphics2D } from '../../../java/awt/Graphics2D.d.ts'
import type { GraphicsConfiguration } from '../../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { ImageCapabilities } from '../../../java/awt/ImageCapabilities.d.ts'
import type { Transparency } from '../../../java/awt/Transparency.d.ts'
import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { ImageProducer } from '../../../java/awt/image/ImageProducer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class VolatileImage extends Image implements Transparency {
    static BITMASK: number;
    static IMAGE_INCOMPATIBLE: number;
    static IMAGE_OK: number;
    static IMAGE_RESTORED: number;
    static OPAQUE: number;
    static SCALE_AREA_AVERAGING: number;
    static SCALE_DEFAULT: number;
    static SCALE_FAST: number;
    static SCALE_REPLICATE: number;
    static SCALE_SMOOTH: number;
    static TRANSLUCENT: number;
    static UndefinedProperty: Object;
    constructor()
    transparency: number;
    contentsLost(): boolean;
    createGraphics(): Graphics2D;
    getCapabilities(): ImageCapabilities;
    getGraphics(): Graphics;
    getHeight(): number;
    getSnapshot(): BufferedImage;
    getSource(): ImageProducer;
    getTransparency(): number;
    getWidth(): number;
    validate(arg0: GraphicsConfiguration): number;
}