import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetP$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetP$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReForgetP<R extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<ReForgetP$Mu<R>, A, B>, Object{
    run(arg0: A, arg1: R): B;
}