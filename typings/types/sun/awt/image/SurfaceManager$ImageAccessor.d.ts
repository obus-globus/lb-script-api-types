import type { Image } from '../../../java/awt/Image.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SurfaceManager } from '../../../sun/awt/image/SurfaceManager.d.ts'
export abstract class SurfaceManager$ImageAccessor extends Object {
    constructor()
    getSurfaceManager(arg0: Image): SurfaceManager;
    setSurfaceManager(arg0: Image, arg1: SurfaceManager): void;
}