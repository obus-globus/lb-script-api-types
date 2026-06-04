import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
export abstract class ConcurrentLinkedListNode<N extends ConcurrentLinkedListNode<N>> extends Object {
    constructor(prev: N | null)
    cleanPrev(): void;
    markAsClosed(): boolean;
    nextOrIfClosed(onClosedAction: () => void): N | null;
    remove(): void;
    trySetNext(value: N): boolean;
}