import type { Color } from '../../java/awt/Color.d.ts'
import type { Composite } from '../../java/awt/Composite.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Paint } from '../../java/awt/Paint.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { RenderingHints$Key } from '../../java/awt/RenderingHints$Key.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Stroke } from '../../java/awt/Stroke.d.ts'
import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { GlyphVector } from '../../java/awt/font/GlyphVector.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { BufferedImage } from '../../java/awt/image/BufferedImage.d.ts'
import type { BufferedImageOp } from '../../java/awt/image/BufferedImageOp.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { RenderedImage } from '../../java/awt/image/RenderedImage.d.ts'
import type { RenderableImage } from '../../java/awt/image/renderable/RenderableImage.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Graphics2D extends Graphics {
    constructor()
    addRenderingHints(arg0: Map<Object | null, Object | null>): void;
    clip(arg0: Shape): void;
    draw(arg0: Shape): void;
    draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    drawGlyphVector(arg0: GlyphVector, arg1: number, arg2: number): void;
    drawImage(arg0: Image, arg1: AffineTransform, arg2: ImageObserver): boolean;
    drawImage(arg0: BufferedImage, arg1: BufferedImageOp, arg2: number, arg3: number): void;
    drawRenderableImage(arg0: RenderableImage, arg1: AffineTransform): void;
    drawRenderedImage(arg0: RenderedImage, arg1: AffineTransform): void;
    drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;
    drawString(arg0: string, arg1: number, arg2: number): void;
    fill(arg0: Shape): void;
    fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    getBackground(): Color;
    getComposite(): Composite;
    getDeviceConfiguration(): GraphicsConfiguration;
    getFontRenderContext(): FontRenderContext;
    getPaint(): Paint;
    getRenderingHint(arg0: RenderingHints$Key): Object;
    getRenderingHints(): { [key: string]: any };
    getStroke(): Stroke;
    getTransform(): AffineTransform;
    hit(arg0: Rectangle, arg1: Shape, arg2: boolean): boolean;
    rotate(arg0: number): void;
    rotate(arg0: number, arg1: number, arg2: number): void;
    scale(arg0: number, arg1: number): void;
    setBackground(arg0: Color): void;
    setComposite(arg0: Composite): void;
    setPaint(arg0: Paint): void;
    setRenderingHint(arg0: RenderingHints$Key, arg1: Object): void;
    setRenderingHints(arg0: Map<Object | null, Object | null>): void;
    setStroke(arg0: Stroke): void;
    setTransform(arg0: AffineTransform): void;
    shear(arg0: number, arg1: number): void;
    transform(arg0: AffineTransform): void;
    translate(arg0: number, arg1: number): void;
}