import type { Object } from '../../../java/lang/Object.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
export class ChannelKt extends Object {
    static Channel(paramarg0: number, paramarg1: BufferOverflow, paramarg2: (param0: Object) => void): Channel<Object>;
    static Channel(paramarg0: number): Channel<Object>;
// (invalid TS: name contains '-')     static getOrElse-WpGqRn0(paramarg0: Object, paramarg1: (param0: Object) => Object | null): Object | null;
// (invalid TS: name contains '-')     static onClosed-WpGqRn0(paramarg0: Object, paramarg1: (param0: Object) => void): Object;
// (invalid TS: name contains '-')     static onFailure-WpGqRn0(paramarg0: Object, paramarg1: (param0: Object) => void): Object;
// (invalid TS: name contains '-')     static onSuccess-WpGqRn0(paramarg0: Object, paramarg1: (param0: Object) => void): Object;
}