import type { Frame$Companion } from '../../../io/ktor/websocket/Frame$Companion.d.ts'
import type { FrameType } from '../../../io/ktor/websocket/FrameType.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
export class Frame extends Object {
    static Companion: Frame$Companion;
    protected constructor(fin: boolean, frameType: FrameType, data: number[], disposableHandle: DisposableHandle, rsv1: boolean, rsv2: boolean, rsv3: boolean)
    readonly buffer: ByteBuffer;
    readonly data: number[];
    readonly disposableHandle: DisposableHandle;
    readonly fin: boolean;
    readonly frameType: FrameType;
    readonly rsv1: boolean;
    readonly rsv2: boolean;
    readonly rsv3: boolean;
    copy(): Frame;
    toString(): string;
}