import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { Raster } from '../../java/awt/image/Raster.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PaintContext extends Object{
    dispose(): void;
    getColorModel(): ColorModel;
    getRaster(arg0: number, arg1: number, arg2: number, arg3: number): Raster;
}