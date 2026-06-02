import type { LockFreePrefixTree$Allocator } from '../../../org/graalvm/collections/LockFreePrefixTree$Allocator.d.ts'
import type { LockFreePrefixTree$Node } from '../../../org/graalvm/collections/LockFreePrefixTree$Node.d.ts'
import type { LockFreePrefixTree$Node$HashChildren } from '../../../org/graalvm/collections/LockFreePrefixTree$Node$HashChildren.d.ts'
import type { LockFreePrefixTree$Node$LinearChildren } from '../../../org/graalvm/collections/LockFreePrefixTree$Node$LinearChildren.d.ts'
export class LockFreePrefixTree$HeapAllocator extends LockFreePrefixTree$Allocator {
    constructor()
    newHashChildren(length: number): LockFreePrefixTree$Node$HashChildren;
    newLinearChildren(length: number): LockFreePrefixTree$Node$LinearChildren;
    newNode(key: number): LockFreePrefixTree$Node;
    shutdown(): void;
}