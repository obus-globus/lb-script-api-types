import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineId$Key } from '../../kotlinx/coroutines/CoroutineId$Key.d.ts'
import type { ThreadContextElement } from '../../kotlinx/coroutines/ThreadContextElement.d.ts'
export class CoroutineId extends AbstractCoroutineContextElement implements ThreadContextElement<string> {
    static Key: CoroutineId$Key;
    constructor(id: number)
    readonly id: number;
    component1(): number;
    copy(id: number): CoroutineId;
    equals(other: Object | null): boolean;
    hashCode(): number;
    restoreThreadContext(context: CoroutineContext, oldState: string): void;
    toString(): string;
    updateThreadContext(context: CoroutineContext): string;
}