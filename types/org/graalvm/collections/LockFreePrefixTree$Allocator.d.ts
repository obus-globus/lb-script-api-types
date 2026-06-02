import type { Object } from '../../../java/lang/Object.d.ts'
import type { LockFreePrefixTree$Node } from '../../../org/graalvm/collections/LockFreePrefixTree$Node.d.ts'
import type { LockFreePrefixTree$Node$HashChildren } from '../../../org/graalvm/collections/LockFreePrefixTree$Node$HashChildren.d.ts'
import type { LockFreePrefixTree$Node$LinearChildren } from '../../../org/graalvm/collections/LockFreePrefixTree$Node$LinearChildren.d.ts'
export abstract class LockFreePrefixTree$Allocator extends Object {
    constructor()
    newHashChildren(length: number): LockFreePrefixTree$Node$HashChildren;
    newLinearChildren(length: number): LockFreePrefixTree$Node$LinearChildren;
    newNode(key: number): LockFreePrefixTree$Node;
    shutdown(): void;
}