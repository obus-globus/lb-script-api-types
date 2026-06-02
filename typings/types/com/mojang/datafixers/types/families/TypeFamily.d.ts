import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TypeFamily extends Object{
    apply(arg0: number): Type<Object>;
}