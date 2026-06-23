import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamEncoder<O extends unknown, T extends unknown> extends Object{
    encode(output: O, value: T): void;
}