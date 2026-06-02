import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SampleStorage extends Object{
    capacity(): number;
    get(index: number): number;
    get(index: number, dimension: number): number;
    reset(): void;
    size(): number;
}