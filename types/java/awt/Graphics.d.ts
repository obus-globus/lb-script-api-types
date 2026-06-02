import type { Color } from '../../java/awt/Color.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../java/awt/FontMetrics.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Polygon } from '../../java/awt/Polygon.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { ImageObserver } from '../../java/awt/image/ImageObserver.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Graphics extends Object {
    constructor()
    clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    create(): Graphics;
    create(arg0: number, arg1: number, arg2: number, arg3: number): Graphics;
    dispose(): void;
    draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: Color, arg4: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver): boolean;
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ImageObserver): boolean;
    drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
    drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
    drawPolygon(arg0: Polygon): void;
    drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
    drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
    drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void;
    drawString(arg0: string, arg1: number, arg2: number): void;
    fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
    fillPolygon(arg0: Polygon): void;
    fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
    fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    finalize(): void;
    getClip(): Shape;
    getClipBounds(): Rectangle;
    getClipBounds(arg0: Rectangle): Rectangle;
    getClipRect(): Rectangle;
    getColor(): Color;
    getFont(): Font;
    getFontMetrics(): FontMetrics;
    getFontMetrics(arg0: Font): FontMetrics;
    hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    setClip(arg0: Shape): void;
    setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setColor(arg0: Color): void;
    setFont(arg0: Font): void;
    setPaintMode(): void;
    setXORMode(arg0: Color): void;
    toString(): string;
    translate(arg0: number, arg1: number): void;
}