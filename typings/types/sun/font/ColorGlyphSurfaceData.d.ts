import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Raster } from '../../java/awt/image/Raster.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SurfaceData } from '../../sun/java2d/SurfaceData.d.ts'
import type { CompositeType } from '../../sun/java2d/loops/CompositeType.d.ts'
import type { RenderLoops } from '../../sun/java2d/loops/RenderLoops.d.ts'
import type { SurfaceType } from '../../sun/java2d/loops/SurfaceType.d.ts'
import type { TextPipe } from '../../sun/java2d/pipe/TextPipe.d.ts'
export class ColorGlyphSurfaceData extends SurfaceData {
    static BITMASK: number;
    static OPAQUE: number;
    static TRANSLUCENT: number;
    static aaTextRenderer: TextPipe;
    static lcdTextRenderer: TextPipe;
    static outlineTextRenderer: TextPipe;
    static solidTextRenderer: TextPipe;
    static convertTo(paramarg0: Class<Object>, paramarg1: SurfaceData): Object | null;
    static getPrimarySurfaceData(paramarg0: Image): SurfaceData;
    static isNull(paramarg0: SurfaceData): boolean;
    static makeRenderLoops(paramarg0: SurfaceType, paramarg1: CompositeType, paramarg2: SurfaceType): RenderLoops;
    static restoreContents(paramarg0: Image): SurfaceData;
    constructor()
    getBounds(): Rectangle;
    getDestination(): Object;
    getDeviceConfiguration(): GraphicsConfiguration;
    getRaster(arg0: number, arg1: number, arg2: number, arg3: number): Raster;
    getReplacement(): SurfaceData;
    // private initOps(): void;
    setCurrentGlyph(arg0: number): void;
}