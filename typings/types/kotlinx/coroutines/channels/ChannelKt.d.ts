import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
export class ChannelKt extends Object {
    static Channel(paramarg0: number, paramarg1: BufferOverflow, paramarg2: Function1<Object, void>): Channel<Object>;
    static Channel(paramarg0: number): Channel<Object>;
//     static getOrElse-WpGqRn0(paramarg0: Object, paramarg1: Function1<Object, Object>): Object | null;
 // ; invalid because of -//     static onClosed-WpGqRn0(paramarg0: Object, paramarg1: Function1<Object, void>): Object;
 // ; invalid because of -//     static onFailure-WpGqRn0(paramarg0: Object, paramarg1: Function1<Object, void>): Object;
 // ; invalid because of -//     static onSuccess-WpGqRn0(paramarg0: Object, paramarg1: Function1<Object, void>): Object;
 // ; invalid because of -}