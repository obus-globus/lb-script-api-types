import type { Object } from '../../../java/lang/Object.d.ts'
export interface Encoder<T extends unknown, R extends unknown> extends Object{
    encode(arg0: T): R;
}