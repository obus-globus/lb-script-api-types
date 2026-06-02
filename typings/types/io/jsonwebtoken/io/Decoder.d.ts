import type { Object } from '../../../java/lang/Object.d.ts'
export interface Decoder<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    decode(arg0: T): R;
}