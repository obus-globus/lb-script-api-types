import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export interface Function0<R extends unknown> extends Object, Function<R>{
    invoke(): R;
}