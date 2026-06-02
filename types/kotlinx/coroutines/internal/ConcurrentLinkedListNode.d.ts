import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
export abstract class ConcurrentLinkedListNode<N extends ConcurrentLinkedListNode<N>> extends Object {
    constructor(prev: N | null)
    cleanPrev(): void;
    markAsClosed(): boolean;
    nextOrIfClosed(onClosedAction: Function0<void>): N | null;
    remove(): void;
    trySetNext(value: N): boolean;
}