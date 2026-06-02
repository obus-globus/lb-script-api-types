import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Operation<R extends Object | number | string | boolean> extends Object{
    call(arg0: Object[]): R;
}