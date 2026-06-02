import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LockFreePrefixTree$Allocator } from '../../../org/graalvm/collections/LockFreePrefixTree$Allocator.d.ts'
export class LockFreePrefixTree$Node extends AtomicLong {
    private constructor()
    private constructor(key: number)
    // private children: AtomicReferenceArray<LockFreePrefixTree$Node>;
    // private key: number;
    at(allocator: LockFreePrefixTree$Allocator, childKey: number): LockFreePrefixTree$Node;
    bitwiseOrValue(pattern: number): number;
    // private casChildren(expected: AtomicReferenceArray<LockFreePrefixTree$Node>, updated: AtomicReferenceArray<LockFreePrefixTree$Node>): boolean;
    // private ensureChildren(allocator: LockFreePrefixTree$Allocator): void;
    // private getKey(): number;
    incValue(): number;
    // private readChildren(): AtomicReferenceArray<LockFreePrefixTree$Node>;
    setValue(value: number): void;
    toString(): string;
    // private topDown<C extends Object | number | string | boolean>(currentContext: C, createContext: (param0: C, param1: number) => C, consumeValue: (param0: C, param1: number) => void): void;
    // private tryResizeHash(allocator: LockFreePrefixTree$Allocator, children0: AtomicReferenceArray<LockFreePrefixTree$Node>): void;
    // private tryResizeLinear(allocator: LockFreePrefixTree$Allocator, childrenArray: AtomicReferenceArray<LockFreePrefixTree$Node>): void;
    value(): number;
}