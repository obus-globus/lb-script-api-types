import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { StateFlow } from '../../../../kotlinx/coroutines/flow/StateFlow.d.ts'
import type { AbstractSharedFlowSlot } from '../../../../kotlinx/coroutines/flow/internal/AbstractSharedFlowSlot.d.ts'
import type { SubscriptionCountStateFlow } from '../../../../kotlinx/coroutines/flow/internal/SubscriptionCountStateFlow.d.ts'
export abstract class AbstractSharedFlow<S extends AbstractSharedFlowSlot<Object>> extends Object {
    constructor()
    // private _subscriptionCount: SubscriptionCountStateFlow | null;
    // private nCollectors: number;
    // private /*not mapped: */ getNCollectors(): number;
    // private nextIndex: number;
    // private slots: (S | null)[] | null;
    // private /*not mapped: */ getSlots(): (S | null)[] | null;
    readonly subscriptionCount: StateFlow<number>;
    protected allocateSlot(): S;
    protected createSlot(): S;
    protected createSlotArray(size: number): (S | null)[];
    protected forEachSlotLocked(block: Function1<S, void>): void;
    protected freeSlot(slot: S): void;
}