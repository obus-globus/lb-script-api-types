import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { AbstractSelectableChannel } from '../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
export abstract class Pipe$SinkChannel extends AbstractSelectableChannel implements GatheringByteChannel, WritableByteChannel {
    constructor(arg0: SelectorProvider)
    validOps(): number;
    write(arg0: ByteBuffer): number;
}