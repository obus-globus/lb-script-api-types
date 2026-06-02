import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
export interface OptionConvertible extends Object{
    asOption(): OptionInstance<Object>;
}