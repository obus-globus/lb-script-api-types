import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
export class ChannelKt extends Object {
    static Channel<E extends unknown>(capacity: number, onBufferOverflow: BufferOverflow, onUndeliveredElement: ((param0: E) => void) | null): Channel<E>;
    static Channel<E extends unknown>(capacity: number): Channel<E>;
// (invalid TS: name contains '-')     static getOrElse-WpGqRn0<T extends unknown>(self: ChannelResult<T>, onFailure: (param0: Throwable | null) => T): T;
// (invalid TS: name contains '-')     static onClosed-WpGqRn0<T extends unknown>(self: ChannelResult<T>, action: (param0: Throwable | null) => void): ChannelResult<T>;
// (invalid TS: name contains '-')     static onFailure-WpGqRn0<T extends unknown>(self: ChannelResult<T>, action: (param0: Throwable | null) => void): ChannelResult<T>;
// (invalid TS: name contains '-')     static onSuccess-WpGqRn0<T extends unknown>(self: ChannelResult<T>, action: (param0: T) => void): ChannelResult<T>;
}