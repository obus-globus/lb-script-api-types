import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ImageConsumer extends Object{
    imageComplete(arg0: number): void;
    setColorModel(arg0: ColorModel): void;
    setDimensions(arg0: number, arg1: number): void;
    setHints(arg0: number): void;
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void;
    setProperties(arg0: JavaMap<Object | null, Object | null>): void;
}