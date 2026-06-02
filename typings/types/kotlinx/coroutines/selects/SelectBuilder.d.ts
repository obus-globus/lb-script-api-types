import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
export interface SelectBuilder<R extends Object | number | string | boolean> extends Object{
    onTimeout(timeMillis: number, block: Function1<Object, Object>): void;
}