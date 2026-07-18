import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Frame$Companion } from '../../../io/ktor/websocket/Frame$Companion.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
export class Frame$Pong extends Frame {
    static Companion: Frame$Companion;
    constructor(buffer: ByteBuffer)
    constructor(buffer: ByteBuffer, disposableHandle?: DisposableHandle)
    constructor(data: number[], disposableHandle: DisposableHandle)
    constructor(packet: Source)
}