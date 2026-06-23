import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export interface Function2<P1 extends unknown, P2 extends unknown, R extends unknown> extends Object, Function<R>{
    invoke(null_: P1, null_: P2): R;
}