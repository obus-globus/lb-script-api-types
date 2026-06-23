import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SeqLockPrefixTree$Visitor } from '../../../org/graalvm/collections/SeqLockPrefixTree$Visitor.d.ts'
export class SeqLockPrefixTree$Node extends AtomicLong {
    private constructor()
    // private arity: number;
    // private children: SeqLockPrefixTree$Node[];
    // private keys: number[];
    // private seqlock: number;
    // private addChildToHashNode(key: number, child: SeqLockPrefixTree$Node): void;
    // private addChildToLinearNode(key: number, child: SeqLockPrefixTree$Node): void;
    // private addChildToNonFullHashNode(key: number, child: SeqLockPrefixTree$Node): void;
    at(key: number): SeqLockPrefixTree$Node;
    // private bottomUp<R extends unknown>(visitor: SeqLockPrefixTree$Visitor<R>): R;
    // private convertToHashNode(): void;
    // private findChildLockFree(key: number): SeqLockPrefixTree$Node;
    // private growHash(): void;
    incValue(): number;
    // private mustGrowHash(): boolean;
    seqlockValue(): number;
    setValue(value: number): void;
    toString(): string;
    topDown<C extends unknown>(currentContext: C, createContext: (param0: C, param1: number) => C, consumeValue: (param0: C, param1: number) => void): void;
    // private tryAddChild(key: number): SeqLockPrefixTree$Node;
    value(): number;
}