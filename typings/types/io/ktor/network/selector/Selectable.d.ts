import type { InterestSuspensionsMap } from '../../../../io/ktor/network/selector/InterestSuspensionsMap.d.ts'
import type { SelectInterest } from '../../../../io/ktor/network/selector/SelectInterest.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../../../kotlinx/coroutines/DisposableHandle.d.ts'
export interface Selectable extends Closeable, Object, DisposableHandle{
    readonly channel: SelectableChannel;
    readonly interestedOps: number;
    /*not mapped: */ isClosed(): boolean;
    readonly suspensions: InterestSuspensionsMap;
    close(): void;
    dispose(): void;
    interestOp(interest: SelectInterest, state: boolean): void;
}