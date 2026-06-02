import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BufferedImageOp extends Object{
    createCompatibleDestImage(arg0: BufferedImage, arg1: ColorModel): BufferedImage;
    filter(arg0: BufferedImage, arg1: BufferedImage): BufferedImage;
    getBounds2D(arg0: BufferedImage): Rectangle2D;
    getPoint2D(arg0: Point2D, arg1: Point2D): Point2D;
    getRenderingHints(): RenderingHints;
}