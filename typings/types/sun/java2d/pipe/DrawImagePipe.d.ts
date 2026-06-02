import type { Color } from '../../../java/awt/Color.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { BufferedImageOp } from '../../../java/awt/image/BufferedImageOp.d.ts'
import type { ImageObserver } from '../../../java/awt/image/ImageObserver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunGraphics2D } from '../../../sun/java2d/SunGraphics2D.d.ts'
export interface DrawImagePipe extends Object{
    copyImage(arg0: SunGraphics2D, arg1: Image, arg2: number, arg3: number, arg4: Color, arg5: ImageObserver): boolean;
    copyImage(arg0: SunGraphics2D, arg1: Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Color, arg9: ImageObserver): boolean;
    scaleImage(arg0: SunGraphics2D, arg1: Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Color, arg7: ImageObserver): boolean;
    scaleImage(arg0: SunGraphics2D, arg1: Image, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Color, arg11: ImageObserver): boolean;
    transformImage(arg0: SunGraphics2D, arg1: Image, arg2: AffineTransform, arg3: ImageObserver): boolean;
    transformImage(arg0: SunGraphics2D, arg1: BufferedImage, arg2: BufferedImageOp, arg3: number, arg4: number): void;
}