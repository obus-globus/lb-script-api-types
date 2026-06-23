import type { CompositeContext } from '../../java/awt/CompositeContext.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Composite extends Object{
    createContext(arg0: ColorModel, arg1: ColorModel, arg2: { [key: string]: any }): CompositeContext;
}