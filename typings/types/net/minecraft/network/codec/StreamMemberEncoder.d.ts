import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamMemberEncoder<O extends unknown, T extends unknown> extends Object{
    encode(value: T, output: O): void;
}