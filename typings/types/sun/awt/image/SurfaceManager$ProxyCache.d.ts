import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SurfaceManager } from '../../../sun/awt/image/SurfaceManager.d.ts'
import type { SurfaceDataProxy } from '../../../sun/java2d/SurfaceDataProxy.d.ts'
export class SurfaceManager$ProxyCache extends Object {
    constructor()
    // private map: JavaMap<SurfaceManager, SurfaceDataProxy>;
    get(arg0: SurfaceManager): SurfaceDataProxy;
    put(arg0: SurfaceManager, arg1: SurfaceDataProxy): void;
}