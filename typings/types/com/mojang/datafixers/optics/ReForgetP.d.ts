import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetP$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetP$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReForgetP<R extends unknown, A extends unknown, B extends unknown> extends App2<ReForgetP$Mu<R>, A, B>, Object{
    run(arg0: A, arg1: R): B;
}