import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { Raster } from '../../../java/awt/image/Raster.d.ts'
import type { SampleModel } from '../../../java/awt/image/SampleModel.d.ts'
import type { WritableRaster } from '../../../java/awt/image/WritableRaster.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RenderedImage extends Object{
    copyData(arg0: WritableRaster): WritableRaster;
    getColorModel(): ColorModel;
    getData(): Raster;
    getData(arg0: Rectangle): Raster;
    getHeight(): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getMinX(): number;
    getMinY(): number;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getProperty(arg0: string): Object;
    getPropertyNames(): string[];
    getSampleModel(): SampleModel;
    getSources(): RenderedImage[];
    getTile(arg0: number, arg1: number): Raster;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTileHeight(): number;
    getTileWidth(): number;
    getWidth(): number;
}