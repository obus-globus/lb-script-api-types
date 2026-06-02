import type { AbstractBufferEvent } from '../../../io/netty/buffer/AbstractBufferEvent.d.ts'
export class AllocateBufferEvent extends AbstractBufferEvent {
    static isEventEnabled(): boolean;
    constructor()
    chunkPooled: boolean;
    chunkThreadLocal: boolean;
}