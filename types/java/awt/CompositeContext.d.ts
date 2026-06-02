import type { Raster } from '../../java/awt/image/Raster.d.ts'
import type { WritableRaster } from '../../java/awt/image/WritableRaster.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CompositeContext extends Object{
    compose(arg0: Raster, arg1: Raster, arg2: WritableRaster): void;
    dispose(): void;
}