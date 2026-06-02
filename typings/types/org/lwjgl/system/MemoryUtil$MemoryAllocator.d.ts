import type { Object } from '../../../java/lang/Object.d.ts'
export interface MemoryUtil$MemoryAllocator extends Object{
    aligned_alloc(arg0: number, arg1: number): number;
    aligned_free(arg0: number): void;
    calloc(arg0: number, arg1: number): number;
    free(arg0: number): void;
    getAlignedAlloc(): number;
    getAlignedFree(): number;
    getCalloc(): number;
    getFree(): number;
    getMalloc(): number;
    getRealloc(): number;
    malloc(arg0: number): number;
    realloc(arg0: number, arg1: number): number;
}