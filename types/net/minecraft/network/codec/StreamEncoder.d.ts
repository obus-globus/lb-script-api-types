import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamEncoder<O extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    encode(output: O, value: T): void;
}