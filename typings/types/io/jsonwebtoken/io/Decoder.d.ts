import type { Object } from '../../../java/lang/Object.d.ts'
export interface Decoder<T extends unknown, R extends unknown> extends Object{
    decode(arg0: T): R;
}