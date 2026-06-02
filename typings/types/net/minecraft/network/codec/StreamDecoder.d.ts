import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamDecoder<I extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    decode(input: I): T;
}