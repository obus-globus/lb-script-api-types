import type { InterestSuspensionsMap } from '../../../../io/ktor/network/selector/InterestSuspensionsMap.d.ts'
import type { SelectInterest } from '../../../../io/ktor/network/selector/SelectInterest.d.ts'
import type { Selectable } from '../../../../io/ktor/network/selector/Selectable.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SelectableBase extends Object implements Selectable {
    constructor()
    // private _isClosed: AtomicBoolean;
    /*not mapped: */ getChannel(): SelectableChannel;
    readonly interestedOps: number;
    /*not mapped: */ isClosed(): boolean;
    readonly suspensions: InterestSuspensionsMap;
    close(): void;
    dispose(): void;
    interestOp(interest: SelectInterest, state: boolean): void;
}