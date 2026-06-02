import type { Object } from '../../../java/lang/Object.d.ts'
export interface ReadValueCallback<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    read(arg0: T): R;
}