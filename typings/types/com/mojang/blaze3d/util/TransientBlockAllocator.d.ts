import type { TransientBlockAllocator$Allocation } from '../../../../com/mojang/blaze3d/util/TransientBlockAllocator$Allocation.d.ts'
import type { TransientBlockAllocator$Allocator } from '../../../../com/mojang/blaze3d/util/TransientBlockAllocator$Allocator.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransientBlockAllocator<T extends unknown> extends Object implements AutoCloseable {
    constructor(blockSize: number, maxAlignment: number, allocator: TransientBlockAllocator$Allocator<T>)
    constructor(blockSize: number, maxAlignment: number, allocator: TransientBlockAllocator$Allocator<T>, onBlockUse: (param0: T) => void)
    // private allocator: TransientBlockAllocator$Allocator<T>;
    // private blockSize: number;
    // private currentBlock: T;
    // private currentOffset: number;
    // private freeBlocks: T[];
    // private maxAlignment: number;
    // private onBlockUse: (param0: T) => void;
    // private specialBlocks: T[];
    // private usedBlocks: T[];
    allocate(size: number, alignment: number, minimumAllocation: number, elementSize: number): TransientBlockAllocator$Allocation<T>;
    // private allocateBlock(): T;
    blockSize(): number;
    canAllocateInBlock(size: number, alignment: number): boolean;
    canAllocateInCurrentBlock(size: number, alignment: number): boolean;
    close(): void;
    rotate(): () => void;
}