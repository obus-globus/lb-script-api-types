import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ForgetOpt$Mu } from '../../../../com/mojang/datafixers/optics/ForgetOpt$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ForgetOpt<R extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<ForgetOpt$Mu<R>, A, B>, Object{
    run(arg0: A): Optional<R>;
}