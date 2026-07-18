import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Frame$Companion } from '../../../io/ktor/websocket/Frame$Companion.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
export class Frame$Text extends Frame {
    static Companion: Frame$Companion;
    constructor(fin: boolean, buffer: ByteBuffer)
    constructor(fin: boolean, data: number[])
    constructor(fin: boolean, data: number[], rsv1: boolean, rsv2: boolean, rsv3: boolean)
    constructor(fin: boolean, packet: Source)
    constructor(text: string)
}