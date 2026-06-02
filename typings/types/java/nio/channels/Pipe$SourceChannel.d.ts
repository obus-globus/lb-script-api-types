import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { AbstractSelectableChannel } from '../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
export abstract class Pipe$SourceChannel extends AbstractSelectableChannel implements ReadableByteChannel, ScatteringByteChannel {
    constructor(arg0: SelectorProvider)
    validOps(): number;
}