import type { Point } from '../../../java/awt/Point.d.ts'
import type { Raster } from '../../../java/awt/image/Raster.d.ts'
import type { RenderedImage } from '../../../java/awt/image/RenderedImage.d.ts'
import type { TileObserver } from '../../../java/awt/image/TileObserver.d.ts'
import type { WritableRaster } from '../../../java/awt/image/WritableRaster.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WritableRenderedImage extends RenderedImage, Object{
    addTileObserver(arg0: TileObserver): void;
    getWritableTile(arg0: number, arg1: number): WritableRaster;
    getWritableTileIndices(): Point[];
    hasTileWriters(): boolean;
    isTileWritable(arg0: number, arg1: number): boolean;
    releaseWritableTile(arg0: number, arg1: number): void;
    removeTileObserver(arg0: TileObserver): void;
    setData(arg0: Raster): void;
}