import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { FrameType } from '../../../io/ktor/websocket/FrameType.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Serializer extends Object {
    constructor()
    // private frameBody: ByteBuffer | null;
    readonly hasOutstandingBytes: boolean;
    // private lastDataFrameType: FrameType | null;
    // private maskBuffer: ByteBuffer | null;
    masking: boolean;
    // private messages: Frame[];
    readonly remainingCapacity: number;
    enqueue(f: Frame): void;
    // private estimateFrameHeaderSize(f: Frame, mask: boolean): number;
    // private maskSize(mask: boolean): number;
    serialize(buffer: ByteBuffer): void;
    // private serializeHeader(frame: Frame, buffer: ByteBuffer, mask: boolean): void;
    // private setMaskBuffer(mask: boolean): void;
    // private writeCurrentPayload(buffer: ByteBuffer): boolean;
}