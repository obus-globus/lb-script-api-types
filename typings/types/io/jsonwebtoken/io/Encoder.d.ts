import type { Object } from '../../../java/lang/Object.d.ts'
export interface Encoder<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    encode(arg0: T): R;
}