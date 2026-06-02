import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LockFreePrefixTree$Allocator } from '../../../org/graalvm/collections/LockFreePrefixTree$Allocator.d.ts'
import type { LockFreePrefixTree$Node } from '../../../org/graalvm/collections/LockFreePrefixTree$Node.d.ts'
export class LockFreePrefixTree extends Object {
    constructor(allocator: LockFreePrefixTree$Allocator)
    // private allocator: LockFreePrefixTree$Allocator;
    // private root: LockFreePrefixTree$Node;
    allocator(): LockFreePrefixTree$Allocator;
    reset(): void;
    root(): LockFreePrefixTree$Node;
    topDown<C extends Object | number | string | boolean>(initialContext: C, createContext: (param0: C, param1: number) => C, consumeValue: (param0: C, param1: number) => void): void;
}