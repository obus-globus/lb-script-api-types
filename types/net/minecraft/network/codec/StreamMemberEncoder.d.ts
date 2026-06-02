import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamMemberEncoder<O extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    encode(value: T, output: O): void;
}