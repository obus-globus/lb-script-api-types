import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LongCounter extends Object{
    add(arg0: number): void;
    decrement(): void;
    increment(): void;
    value(): number;
}