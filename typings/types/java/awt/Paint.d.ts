import type { JavaMap } from '../../JavaMap.d.ts'
import type { PaintContext } from '../../java/awt/PaintContext.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Transparency } from '../../java/awt/Transparency.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Paint extends Transparency, Object{
    createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: JavaMap<any, any>): PaintContext;
    getTransparency(): number;
}