import type { Color } from '../../java/awt/Color.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Transparency } from '../../java/awt/Transparency.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { Raster } from '../../java/awt/image/Raster.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SurfaceManager$ProxyCache } from '../../sun/awt/image/SurfaceManager$ProxyCache.d.ts'
import type { DisposerTarget } from '../../sun/java2d/DisposerTarget.d.ts'
import type { StateTrackable } from '../../sun/java2d/StateTrackable.d.ts'
import type { StateTrackable$State } from '../../sun/java2d/StateTrackable$State.d.ts'
import type { StateTrackableDelegate } from '../../sun/java2d/StateTrackableDelegate.d.ts'
import type { StateTracker } from '../../sun/java2d/StateTracker.d.ts'
import type { SunGraphics2D } from '../../sun/java2d/SunGraphics2D.d.ts'
import type { Surface } from '../../sun/java2d/Surface.d.ts'
import type { SurfaceDataProxy } from '../../sun/java2d/SurfaceDataProxy.d.ts'
import type { CompositeType } from '../../sun/java2d/loops/CompositeType.d.ts'
import type { MaskFill } from '../../sun/java2d/loops/MaskFill.d.ts'
import type { RenderLoops } from '../../sun/java2d/loops/RenderLoops.d.ts'
import type { SurfaceType } from '../../sun/java2d/loops/SurfaceType.d.ts'
import type { TextPipe } from '../../sun/java2d/pipe/TextPipe.d.ts'
export abstract class SurfaceData extends Object implements Transparency, DisposerTarget, StateTrackable, Surface {
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
    constructor(arg0: StateTrackable$State)
    constructor(arg0: StateTrackable$State, arg1: SurfaceType, arg2: ColorModel)
    constructor(arg0: StateTrackableDelegate, arg1: SurfaceType, arg2: ColorModel)
    constructor(arg0: SurfaceType, arg1: ColorModel)
    // private blitProxyCache: SurfaceManager$ProxyCache;
    readonly colorModel: ColorModel;
    readonly disposerReferent: Object;
    // private haveLCDLoop: number;
    // private havePgramSolidLoop: number;
    // private havePgramXORLoop: number;
    // private pData: number;
    // private stateDelegate: StateTrackableDelegate;
    readonly surfaceLost: boolean;
    readonly surfaceType: SurfaceType;
    readonly valid: boolean;
    canRenderLCDText(arg0: SunGraphics2D): boolean;
    canRenderParallelograms(arg0: SunGraphics2D): boolean;
    copyArea(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
    flush(): void;
    getBounds(): Rectangle;
    getColorModel(): ColorModel;
    getDefaultScaleX(): number;
    getDefaultScaleY(): number;
    getDestination(): Object;
    getDeviceConfiguration(): GraphicsConfiguration;
    getDisposerReferent(): Object;
    getMaskFill(arg0: SunGraphics2D): MaskFill;
    getNativeOps(): number;
    getRaster(arg0: number, arg1: number, arg2: number, arg3: number): Raster;
    getRenderLoops(arg0: SunGraphics2D): RenderLoops;
    getReplacement(): SurfaceData;
    getSourceSurfaceData(arg0: Image, arg1: number, arg2: CompositeType, arg3: Color): SurfaceData;
    getState(): StateTrackable$State;
    getStateTracker(): StateTracker;
    getSurfaceType(): SurfaceType;
    // private getTextPipe(arg0: SunGraphics2D, arg1: boolean): TextPipe;
    getTransparency(): number;
    invalidate(): void;
    isSurfaceLost(): boolean;
    isValid(): boolean;
    makeProxyFor(arg0: SurfaceData): SurfaceDataProxy;
    markDirty(): void;
    pixelFor(arg0: Color): number;
    pixelFor(arg0: number): number;
    rgbFor(arg0: number): number;
    setBlitProxyCache(arg0: SurfaceManager$ProxyCache): void;
    setSurfaceLost(arg0: boolean): void;
    useTightBBoxes(): boolean;
    validatePipe(arg0: SunGraphics2D): void;
}