import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Operation<R extends unknown> extends Object{
    call(arg0: Object[]): R;
}