import type { BasicStroke } from '../../java/awt/BasicStroke.d.ts'
import type { Color } from '../../java/awt/Color.d.ts'
import type { Composite } from '../../java/awt/Composite.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../java/awt/FontMetrics.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Graphics2D } from '../../java/awt/Graphics2D.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Paint } from '../../java/awt/Paint.d.ts'
import type { Polygon } from '../../java/awt/Polygon.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { RenderingHints$Key } from '../../java/awt/RenderingHints$Key.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Stroke } from '../../java/awt/Stroke.d.ts'
import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { GlyphVector } from '../../java/awt/font/GlyphVector.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { BufferedImage } from '../../java/awt/image/BufferedImage.d.ts'
import type { BufferedImageOp } from '../../java/awt/image/BufferedImageOp.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { MultiResolutionImage } from '../../java/awt/image/MultiResolutionImage.d.ts'
import type { RenderedImage } from '../../java/awt/image/RenderedImage.d.ts'
import type { RenderableImage } from '../../java/awt/image/renderable/RenderableImage.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { ConstrainableGraphics } from '../../sun/awt/ConstrainableGraphics.d.ts'
import type { DestSurfaceProvider } from '../../sun/java2d/DestSurfaceProvider.d.ts'
import type { Surface } from '../../sun/java2d/Surface.d.ts'
import type { SurfaceData } from '../../sun/java2d/SurfaceData.d.ts'
import type { Blit } from '../../sun/java2d/loops/Blit.d.ts'
import type { CompositeType } from '../../sun/java2d/loops/CompositeType.d.ts'
import type { FontInfo } from '../../sun/java2d/loops/FontInfo.d.ts'
import type { MaskFill } from '../../sun/java2d/loops/MaskFill.d.ts'
import type { RenderLoops } from '../../sun/java2d/loops/RenderLoops.d.ts'
import type { DrawImagePipe } from '../../sun/java2d/pipe/DrawImagePipe.d.ts'
import type { PixelDrawPipe } from '../../sun/java2d/pipe/PixelDrawPipe.d.ts'
import type { PixelFillPipe } from '../../sun/java2d/pipe/PixelFillPipe.d.ts'
import type { Region } from '../../sun/java2d/pipe/Region.d.ts'
import type { ShapeDrawPipe } from '../../sun/java2d/pipe/ShapeDrawPipe.d.ts'
import type { TextPipe } from '../../sun/java2d/pipe/TextPipe.d.ts'
export class SunGraphics2D extends Graphics2D implements Cloneable, ConstrainableGraphics, DestSurfaceProvider {
    static CLIP_DEVICE: number;
    static CLIP_RECTANGULAR: number;
    static CLIP_SHAPE: number;
    static COMP_ALPHA: number;
    static COMP_CUSTOM: number;
    static COMP_ISCOPY: number;
    static COMP_XOR: number;
    static MinPenSizeAA: number;
    static MinPenSizeAASquared: number;
    static MinPenSizeSquared: number;
    static PAINT_ALPHACOLOR: number;
    static PAINT_CUSTOM: number;
    static PAINT_GRADIENT: number;
    static PAINT_LIN_GRADIENT: number;
    static PAINT_OPAQUECOLOR: number;
    static PAINT_RAD_GRADIENT: number;
    static PAINT_TEXTURE: number;
    static STROKE_CUSTOM: number;
    static STROKE_THIN: number;
    static STROKE_THINDASHED: number;
    static STROKE_WIDE: number;
    static TRANSFORM_ANY_TRANSLATE: number;
    static TRANSFORM_GENERIC: number;
    static TRANSFORM_INT_TRANSLATE: number;
    static TRANSFORM_ISIDENT: number;
    static TRANSFORM_TRANSLATESCALE: number;
    static isRotated(paramarg0: number[]): boolean;
    constructor(arg0: SurfaceData, arg1: Color, arg2: Color, arg3: Font)
    alphafill: MaskFill;
    antialiasHint: number;
    backgroundColor: Color;
    // private cachedFRC: FontRenderContext;
    clipRegion: Region;
    clipState: number;
    composite: Composite;
    compositeState: number;
    constrainClip: Region;
    constrainX: number;
    constrainY: number;
    devClip: Region;
    drawpipe: PixelDrawPipe;
    eargb: number;
    fillpipe: PixelFillPipe;
    font: Font;
    readonly fontInfo: FontInfo;
    fontMetrics: FontMetrics;
    foregroundColor: Color;
    // private fractionalMetricsHint: number;
    // private glyphVectorFRC: FontRenderContext;
    // private glyphVectorFontInfo: FontInfo;
    hints: RenderingHints;
    imageComp: CompositeType;
    imagepipe: DrawImagePipe;
    // private interpolationHint: number;
    interpolationType: number;
    // private lastCAblit: Blit;
    // private lastCAcomp: Composite;
    lcdTextContrast: number;
    loops: RenderLoops;
    paint: Paint;
    paintState: number;
    pixel: number;
    renderHint: number;
    // private resolutionVariantHint: number;
    shapepipe: ShapeDrawPipe;
    stroke: Stroke;
    strokeHint: number;
    strokeState: number;
    surfaceData: SurfaceData;
    textAntialiasHint: number;
    textpipe: TextPipe;
    transX: number;
    transY: number;
    transformState: number;
    usrClip: Shape;
    // private validFontInfo: boolean;
    addRenderingHints(arg0: Map<Object | null, Object | null>): void;
    checkFontInfo(arg0: FontInfo, arg1: Font, arg2: FontRenderContext): FontInfo;
    clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    clip(arg0: Shape): void;
    clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private clipTo(arg0: Rectangle, arg1: Rectangle): boolean;
    protected clone(): Object;
    clone(): Object;
    cloneTransform(): AffineTransform;
    constrain(arg0: number, arg1: number, arg2: number, arg3: number): void;
    constrain(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Region): void;
    copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    copyImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Color, arg8: ImageObserver): boolean;
    create(): Graphics;
    create(arg0: number, arg1: number, arg2: number, arg3: number): Graphics;
    dispose(): void;
    // private doCopyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    draw(arg0: Shape): void;
    drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawGlyphVector(arg0: GlyphVector, arg1: number, arg2: number): void;
    // private drawHiDPIImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver, arg11: AffineTransform): boolean;
    drawImage(arg0: Image, arg1: AffineTransform, arg2: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: Color, arg4: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ImageObserver): boolean;
    drawImage(arg0: BufferedImage, arg1: BufferedImageOp, arg2: number, arg3: number): void;
    drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
    drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
    drawPolygon(arg0: Polygon): void;
    drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
    drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
    drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    drawRenderableImage(arg0: RenderableImage, arg1: AffineTransform): void;
    drawRenderedImage(arg0: RenderedImage, arg1: AffineTransform): void;
    drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;
    drawString(arg0: string, arg1: number, arg2: number): void;
    // private drawTranslatedRenderedImage(arg0: RenderedImage, arg1: Rectangle, arg2: number, arg3: number): void;
    fill(arg0: Shape): void;
    fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
    fillPolygon(arg0: Polygon): void;
    fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
    fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    finalize(): void;
    getBackground(): Color;
    getClip(): Shape;
    getClipBounds(): Rectangle;
    getClipBounds(arg0: Rectangle): Rectangle;
    getColor(): Color;
    getCompClip(): Region;
    getComposite(): Composite;
    // private getDefaultTransform(): AffineTransform;
    getDestSurface(): Surface;
    getDestination(): Object;
    getDeviceColorModel(): ColorModel;
    getDeviceConfiguration(): GraphicsConfiguration;
    getFont(): Font;
    getFontInfo(): FontInfo;
    getFontMetrics(): FontMetrics;
    getFontMetrics(arg0: Font): FontMetrics;
    getFontRenderContext(): FontRenderContext;
    getGVFontInfo(arg0: Font, arg1: FontRenderContext): FontInfo;
    getPaint(): Paint;
    getRenderingHint(arg0: RenderingHints$Key): Object;
    getRenderingHints(): RenderingHints;
    // private getResolutionVariant(arg0: MultiResolutionImage, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: AffineTransform): Image;
    getStroke(): Stroke;
    getSurfaceData(): SurfaceData;
    getTransform(): AffineTransform;
    hit(arg0: Rectangle, arg1: Shape, arg2: boolean): boolean;
    hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    intersectByArea(arg0: Shape, arg1: Shape, arg2: boolean, arg3: boolean): Shape;
    intersectRectShape(arg0: Rectangle2D, arg1: Shape, arg2: boolean, arg3: boolean): Shape;
    intersectShapes(arg0: Shape, arg1: Shape, arg2: boolean, arg3: boolean): Shape;
    invalidatePipe(): void;
    invalidateTransform(): void;
    makeHints(arg0: Map<Object | null, Object | null>): RenderingHints;
    // private revalidateAll(): void;
    rotate(arg0: number): void;
    rotate(arg0: number, arg1: number, arg2: number): void;
    scale(arg0: number, arg1: number): void;
    // private scaleImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver): boolean;
    setBackground(arg0: Color): void;
    setClip(arg0: Shape): void;
    setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setColor(arg0: Color): void;
    setComposite(arg0: Composite): void;
    setDevClip(arg0: Rectangle): void;
    setDevClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setFont(arg0: Font): void;
    setPaint(arg0: Paint): void;
    setPaintMode(): void;
    setRenderingHint(arg0: RenderingHints$Key, arg1: Object): void;
    setRenderingHints(arg0: Map<Object | null, Object | null>): void;
    setStroke(arg0: Stroke): void;
    setTransform(arg0: AffineTransform): void;
    setXORMode(arg0: Color): void;
    shear(arg0: number, arg1: number): void;
    transform(arg0: AffineTransform): void;
    transformBounds(arg0: Rectangle, arg1: AffineTransform): Rectangle;
    // private transformImage(arg0: Image, arg1: AffineTransform, arg2: ImageObserver): boolean;
    transformShape(arg0: Shape): Shape;
    translate(arg0: number, arg1: number): void;
    untransformShape(arg0: Shape): Shape;
    // private validateBasicStroke(arg0: BasicStroke): void;
    validateColor(): void;
    validateCompClip(): void;
    validatePipe(): void;
}