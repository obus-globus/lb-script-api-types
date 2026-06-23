import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForget$Mu } from '../../../../com/mojang/datafixers/optics/ReForget$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReForget<R extends unknown, A extends unknown, B extends unknown> extends App2<ReForget$Mu<R>, A, B>, Object{
    run(arg0: R): B;
}