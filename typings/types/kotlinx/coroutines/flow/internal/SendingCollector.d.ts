import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SendChannel } from '../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class SendingCollector<T extends unknown> extends Object implements FlowCollector<T> {
    constructor(channel: SendChannel<T>)
    // private channel: SendChannel<T>;
    emit(value: T): void;
}