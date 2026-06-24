import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TransientBlockAllocator$Allocator<T extends unknown> extends Object{
    alloc(size: number): T;
    free(t: T): void;
}