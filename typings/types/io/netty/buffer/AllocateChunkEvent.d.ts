import type { AbstractChunkEvent } from '../../../io/netty/buffer/AbstractChunkEvent.d.ts'
export class AllocateChunkEvent extends AbstractChunkEvent {
    static isEventEnabled(): boolean;
    constructor()
    pooled: boolean;
    threadLocal: boolean;
}