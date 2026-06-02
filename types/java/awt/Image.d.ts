import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { ImageCapabilities } from '../../java/awt/ImageCapabilities.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { ImageProducer } from '../../java/awt/image/ImageProducer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SurfaceManager } from '../../sun/awt/image/SurfaceManager.d.ts'
export abstract class Image extends Object {
    static SCALE_AREA_AVERAGING: number;
    static SCALE_DEFAULT: number;
    static SCALE_FAST: number;
    static SCALE_REPLICATE: number;
    static SCALE_SMOOTH: number;
    static UndefinedProperty: Object;
    constructor()
    accelerationPriority: number;
    // private surfaceManager: SurfaceManager;
    flush(): void;
    getAccelerationPriority(): number;
    getCapabilities(arg0: GraphicsConfiguration): ImageCapabilities;
    getGraphics(): Graphics;
    getHeight(arg0: ImageObserver): number;
    getProperty(arg0: string, arg1: ImageObserver): Object;
    getScaledInstance(arg0: number, arg1: number, arg2: number): Image;
    getSource(): ImageProducer;
    getWidth(arg0: ImageObserver): number;
    setAccelerationPriority(arg0: number): void;
}