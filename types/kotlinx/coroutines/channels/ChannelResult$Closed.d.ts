import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ChannelResult$Failed } from '../../../kotlinx/coroutines/channels/ChannelResult$Failed.d.ts'
export class ChannelResult$Closed extends ChannelResult$Failed {
    constructor(cause: Throwable | null)
    cause: Throwable | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}