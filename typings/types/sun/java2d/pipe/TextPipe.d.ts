import type { GlyphVector } from '../../../java/awt/font/GlyphVector.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunGraphics2D } from '../../../sun/java2d/SunGraphics2D.d.ts'
export interface TextPipe extends Object{
    drawChars(arg0: SunGraphics2D, arg1: string[], arg2: number, arg3: number, arg4: number, arg5: number): void;
    drawGlyphVector(arg0: SunGraphics2D, arg1: GlyphVector, arg2: number, arg3: number): void;
    drawString(arg0: SunGraphics2D, arg1: string, arg2: number, arg3: number): void;
}