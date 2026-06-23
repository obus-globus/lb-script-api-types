import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamDecoder<I extends unknown, T extends unknown> extends Object{
    decode(input: I): T;
}