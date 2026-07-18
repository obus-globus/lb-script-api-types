import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MemoryKt extends Object {
    static storeIntAt(self: number[], index: number, value: number): void;
    static withMemory<T extends unknown>(size: number, block: (param0: number[]) => T): T;
}