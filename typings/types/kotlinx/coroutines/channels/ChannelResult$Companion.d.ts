import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { ChannelResult$Failed } from '../../../kotlinx/coroutines/channels/ChannelResult$Failed.d.ts'
export class ChannelResult$Companion extends Object {
    // private failed: ChannelResult$Failed;
    closed<E extends unknown>(cause: Throwable | null): ChannelResult<E>;
    failure<E extends unknown>(): ChannelResult<E>;
    success<E extends unknown>(value: E): ChannelResult<E>;
}