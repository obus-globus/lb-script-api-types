import type { Object } from '../../java/lang/Object.d.ts'
import type { Surface } from '../../sun/java2d/Surface.d.ts'
export interface DestSurfaceProvider extends Object{
    getDestSurface(): Surface;
}