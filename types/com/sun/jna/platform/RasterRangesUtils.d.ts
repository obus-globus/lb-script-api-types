import type { RasterRangesUtils$RangesOutput } from '../../../../com/sun/jna/platform/RasterRangesUtils$RangesOutput.d.ts'
import type { Raster } from '../../../../java/awt/image/Raster.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RasterRangesUtils extends Object {
    static outputOccupiedRanges(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: RasterRangesUtils$RangesOutput): boolean;
    static outputOccupiedRanges(paramarg0: Raster, paramarg1: RasterRangesUtils$RangesOutput): boolean;
    static outputOccupiedRangesOfBinaryPixels(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: RasterRangesUtils$RangesOutput): boolean;
    constructor()
}