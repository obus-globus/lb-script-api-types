import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Graphics2D } from '../../../java/awt/Graphics2D.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Transparency } from '../../../java/awt/Transparency.d.ts'
import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { ImageObserver } from '../../../java/awt/image/ImageObserver.d.ts'
import type { ImageProducer } from '../../../java/awt/image/ImageProducer.d.ts'
import type { IndexColorModel } from '../../../java/awt/image/IndexColorModel.d.ts'
import type { Raster } from '../../../java/awt/image/Raster.d.ts'
import type { RenderedImage } from '../../../java/awt/image/RenderedImage.d.ts'
import type { SampleModel } from '../../../java/awt/image/SampleModel.d.ts'
import type { TileObserver } from '../../../java/awt/image/TileObserver.d.ts'
import type { WritableRaster } from '../../../java/awt/image/WritableRaster.d.ts'
import type { WritableRenderedImage } from '../../../java/awt/image/WritableRenderedImage.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OffScreenImageSource } from '../../../sun/awt/image/OffScreenImageSource.d.ts'
export class BufferedImage extends Image implements Transparency, WritableRenderedImage {
    static BITMASK: number;
    static OPAQUE: number;
    static SCALE_AREA_AVERAGING: number;
    static SCALE_DEFAULT: number;
    static SCALE_FAST: number;
    static SCALE_REPLICATE: number;
    static SCALE_SMOOTH: number;
    static TRANSLUCENT: number;
    static TYPE_3BYTE_BGR: number;
    static TYPE_4BYTE_ABGR: number;
    static TYPE_4BYTE_ABGR_PRE: number;
    static TYPE_BYTE_BINARY: number;
    static TYPE_BYTE_GRAY: number;
    static TYPE_BYTE_INDEXED: number;
    static TYPE_CUSTOM: number;
    static TYPE_INT_ARGB: number;
    static TYPE_INT_ARGB_PRE: number;
    static TYPE_INT_BGR: number;
    static TYPE_INT_RGB: number;
    static TYPE_USHORT_555_RGB: number;
    static TYPE_USHORT_565_RGB: number;
    static TYPE_USHORT_GRAY: number;
    static UndefinedProperty: Object;
    constructor(arg0: ColorModel, arg1: WritableRaster, arg2: boolean, arg3: JavaMap<Object | null, Object | null>)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: IndexColorModel)
    readonly colorModel: ColorModel;
    // private imageType: number;
    // private osis: OffScreenImageSource;
    // private properties: JavaMap<string, Object>;
    readonly raster: WritableRaster;
    addTileObserver(arg0: TileObserver): void;
    coerceData(arg0: boolean): void;
    copyData(arg0: WritableRaster): WritableRaster;
    createGraphics(): Graphics2D;
    getAlphaRaster(): WritableRaster;
    getColorModel(): ColorModel;
    getData(): Raster;
    getData(arg0: Rectangle): Raster;
    getGraphics(): Graphics;
    getHeight(): number;
    getHeight(arg0: ImageObserver): number;
    getMinTileX(): number;
    getMinTileY(): number;
    getMinX(): number;
    getMinY(): number;
    getNumXTiles(): number;
    getNumYTiles(): number;
    getProperty(arg0: string): Object;
    getProperty(arg0: string, arg1: ImageObserver): Object;
    getPropertyNames(): string[];
    getRGB(arg0: number, arg1: number): number;
    getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
    getRaster(): WritableRaster;
    getSampleModel(): SampleModel;
    getSource(): ImageProducer;
    getSources(): RenderedImage[];
    getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): BufferedImage;
    getTile(arg0: number, arg1: number): Raster;
    getTileGridXOffset(): number;
    getTileGridYOffset(): number;
    getTileHeight(): number;
    getTileWidth(): number;
    getTransparency(): number;
    getType(): number;
    getWidth(): number;
    getWidth(arg0: ImageObserver): number;
    getWritableTile(arg0: number, arg1: number): WritableRaster;
    getWritableTileIndices(): Point[];
    hasTileWriters(): boolean;
    isAlphaPremultiplied(): boolean;
    isTileWritable(arg0: number, arg1: number): boolean;
    releaseWritableTile(arg0: number, arg1: number): void;
    removeTileObserver(arg0: TileObserver): void;
    setData(arg0: Raster): void;
    setRGB(arg0: number, arg1: number, arg2: number): void;
    setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
    toString(): string;
}