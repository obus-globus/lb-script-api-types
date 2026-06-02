import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BitStorage extends Object{
    copy(): BitStorage;
    get(index: number): number;
    getAll(output: (param0: number) => void): void;
    getAndSet(index: number, value: number): number;
    getBits(): number;
    getRaw(): number[];
    getSize(): number;
    set(index: number, value: number): void;
    unpack(output: number[]): void;
}