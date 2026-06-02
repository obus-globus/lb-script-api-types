import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LongAddable extends Object{
    add(x: number): void;
    increment(): void;
    sum(): number;
}