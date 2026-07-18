import type { Object } from '../../../java/lang/Object.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
export class BoundedChannel$Companion extends Object {
    createDelegate<T extends unknown>(capacity: number): Channel<T>;
}