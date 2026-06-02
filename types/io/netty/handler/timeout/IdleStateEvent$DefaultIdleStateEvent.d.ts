import type { IdleState } from '../../../../io/netty/handler/timeout/IdleState.d.ts'
import type { IdleStateEvent } from '../../../../io/netty/handler/timeout/IdleStateEvent.d.ts'
export class IdleStateEvent$DefaultIdleStateEvent extends IdleStateEvent {
    static ALL_IDLE_STATE_EVENT: IdleStateEvent;
    static FIRST_ALL_IDLE_STATE_EVENT: IdleStateEvent;
    static FIRST_READER_IDLE_STATE_EVENT: IdleStateEvent;
    static FIRST_WRITER_IDLE_STATE_EVENT: IdleStateEvent;
    static READER_IDLE_STATE_EVENT: IdleStateEvent;
    static WRITER_IDLE_STATE_EVENT: IdleStateEvent;
    constructor(arg0: IdleState, arg1: boolean)
    // private representation: string;
    toString(): string;
}