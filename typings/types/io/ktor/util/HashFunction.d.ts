import type { Object } from '../../../java/lang/Object.d.ts'
export interface HashFunction extends Object{
    digest(): number[];
    update(input: number[], offset: number, length: number): void;
}