import type { IdleState } from '../../../../io/netty/handler/timeout/IdleState.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdleStateEvent extends Object {
    static ALL_IDLE_STATE_EVENT: IdleStateEvent;
    static FIRST_ALL_IDLE_STATE_EVENT: IdleStateEvent;
    static FIRST_READER_IDLE_STATE_EVENT: IdleStateEvent;
    static FIRST_WRITER_IDLE_STATE_EVENT: IdleStateEvent;
    static READER_IDLE_STATE_EVENT: IdleStateEvent;
    static WRITER_IDLE_STATE_EVENT: IdleStateEvent;
    constructor(arg0: IdleState, arg1: boolean)
    readonly first: boolean;
    // private state: IdleState;
    isFirst(): boolean;
    state(): IdleState;
    toString(): string;
}