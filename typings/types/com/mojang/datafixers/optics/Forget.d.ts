import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Forget$Mu } from '../../../../com/mojang/datafixers/optics/Forget$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Forget<R extends unknown, A extends unknown, B extends unknown> extends App2<Forget$Mu<R>, A, B>, Object{
    run(arg0: A): R;
}