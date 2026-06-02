import type { AbstractBufferEvent } from '../../../io/netty/buffer/AbstractBufferEvent.d.ts'
export class ReallocateBufferEvent extends AbstractBufferEvent {
    static isEventEnabled(): boolean;
    constructor()
    newCapacity: number;
}