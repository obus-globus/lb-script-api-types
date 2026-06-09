import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export interface SendChannel<E extends Object | number | string | boolean> extends Object {
    /*not mapped: */ isClosedForSend(): boolean;
    readonly onSend: SelectClause2<E, SendChannel<E>>;
    close(cause: Throwable | null): boolean;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    offer(element: E): boolean;
    send(element: E): void;
    trySend(element: E): ChannelResult<void>;
}