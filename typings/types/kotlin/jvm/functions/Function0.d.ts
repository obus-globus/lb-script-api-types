import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export interface Function0<R extends Object | number | string | boolean> extends Object, Function<R>{
    invoke(): R;
}