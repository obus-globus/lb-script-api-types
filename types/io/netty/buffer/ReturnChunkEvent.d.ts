import type { AbstractChunkEvent } from '../../../io/netty/buffer/AbstractChunkEvent.d.ts'
export class ReturnChunkEvent extends AbstractChunkEvent {
    static isEventEnabled(): boolean;
    constructor()
    returnedToMagazine: boolean;
}