import type { Object } from '../../../java/lang/Object.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
export class BroadcastChannelKt extends Object {
    static BroadcastChannel<E extends unknown>(capacity: number): BroadcastChannel<E>;
}