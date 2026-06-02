import type { GraphicsConfiguration } from '../../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { ImageCapabilities } from '../../../java/awt/ImageCapabilities.d.ts'
import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SurfaceManager$ImageAccessor } from '../../../sun/awt/image/SurfaceManager$ImageAccessor.d.ts'
import type { SurfaceManager$ProxyCache } from '../../../sun/awt/image/SurfaceManager$ProxyCache.d.ts'
import type { SurfaceData } from '../../../sun/java2d/SurfaceData.d.ts'
import type { SurfaceDataProxy } from '../../../sun/java2d/SurfaceDataProxy.d.ts'
export abstract class SurfaceManager extends Object {
    static getImageScaleX(paramarg0: Image): number;
    static getImageScaleY(paramarg0: Image): number;
    static getManager(paramarg0: Image): SurfaceManager;
    static setImageAccessor(paramarg0: SurfaceManager$ImageAccessor): void;
    static setManager(paramarg0: Image, paramarg1: SurfaceManager): void;
    constructor()
    // private weakCache: Map<SurfaceManager$ProxyCache, WeakReference<SurfaceDataProxy>>;
    acceleratedSurfaceLost(): void;
    flush(): void;
    flush(arg0: boolean): void;
    getCapabilities(arg0: GraphicsConfiguration): ImageCapabilities;
    getPrimarySurfaceData(): SurfaceData;
    restoreContents(): SurfaceData;
    setAccelerationPriority(arg0: number): void;
}