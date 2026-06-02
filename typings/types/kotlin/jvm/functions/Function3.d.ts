import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export interface Function3<P1 extends Object | number | string | boolean, P2 extends Object | number | string | boolean, P3 extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object, Function<R>{
    invoke(null_: P1, null_: P2, null_: P3): R;
}