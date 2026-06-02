import type { Object } from '../../../java/lang/Object.d.ts'
export class MemoryPool extends Object {
    constructor(arg0: number)
    // private id: number;
    free(arg0: number): void;
    malloc(arg0: number, arg1: number): void;
}