import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Frame$Companion } from '../../../io/ktor/websocket/Frame$Companion.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
export class Frame$Close extends Frame {
    static Companion: Frame$Companion;
    constructor()
    constructor(reason: CloseReason)
    constructor(buffer: ByteBuffer)
    constructor(data: number[])
    constructor(packet: Source)
}