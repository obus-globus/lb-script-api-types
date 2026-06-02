import type { AbstractChunkEvent } from '../../../io/netty/buffer/AbstractChunkEvent.d.ts'
export class FreeChunkEvent extends AbstractChunkEvent {
    static isEventEnabled(): boolean;
    constructor()
    pooled: boolean;
}