import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicIntegerArray } from '../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { LockFreePool } from '../../../org/graalvm/collections/LockFreePool.d.ts'
import type { LockFreePrefixTree$Allocator } from '../../../org/graalvm/collections/LockFreePrefixTree$Allocator.d.ts'
import type { LockFreePrefixTree$Node } from '../../../org/graalvm/collections/LockFreePrefixTree$Node.d.ts'
import type { LockFreePrefixTree$Node$HashChildren } from '../../../org/graalvm/collections/LockFreePrefixTree$Node$HashChildren.d.ts'
import type { LockFreePrefixTree$Node$LinearChildren } from '../../../org/graalvm/collections/LockFreePrefixTree$Node$LinearChildren.d.ts'
import type { LockFreePrefixTree$ObjectPoolingAllocator$HousekeepingThread } from '../../../org/graalvm/collections/LockFreePrefixTree$ObjectPoolingAllocator$HousekeepingThread.d.ts'
export class LockFreePrefixTree$ObjectPoolingAllocator extends LockFreePrefixTree$Allocator {
    constructor()
    constructor(housekeepingPeriodMillis: number)
    // private hashChildrenPool: LockFreePool<LockFreePrefixTree$Node$HashChildren>[];
    // private housekeepingThread: LockFreePrefixTree$ObjectPoolingAllocator$HousekeepingThread;
    // private linearChildrenPool: LockFreePool<LockFreePrefixTree$Node$LinearChildren>[];
    // private missedHashChildrenRequestCounts: AtomicIntegerArray;
    // private missedLinearChildrenRequestCounts: AtomicIntegerArray;
    // private missedNodePoolRequestCount: AtomicInteger;
    // private nodePool: LockFreePool<LockFreePrefixTree$Node>;
    newHashChildren(length: number): LockFreePrefixTree$Node$HashChildren;
    newLinearChildren(length: number): LockFreePrefixTree$Node$LinearChildren;
    newNode(key: number): LockFreePrefixTree$Node;
    shutdown(): void;
    status(): string;
}