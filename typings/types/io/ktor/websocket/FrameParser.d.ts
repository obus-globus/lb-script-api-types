import type { FrameParser$State } from '../../../io/ktor/websocket/FrameParser$State.d.ts'
import type { FrameType } from '../../../io/ktor/websocket/FrameType.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FrameParser extends Object {
    constructor()
    readonly bodyReady: boolean;
    readonly fin: boolean;
    readonly frameType: FrameType;
    // private lastOpcode: number;
    readonly length: number;
    // private lengthLength: number;
    readonly mask: boolean;
    readonly maskKey: number | null;
    // private opcode: number;
    readonly rsv1: boolean;
    readonly rsv2: boolean;
    readonly rsv3: boolean;
    // private state: AtomicReference<FrameParser$State>;
    bodyComplete(): void;
    frame(bb: ByteBuffer): void;
    // private handleStep(bb: ByteBuffer): boolean;
    // private parseHeader1(bb: ByteBuffer): boolean;
    // private parseLength(bb: ByteBuffer): boolean;
    // private parseMaskKey(bb: ByteBuffer): boolean;
}