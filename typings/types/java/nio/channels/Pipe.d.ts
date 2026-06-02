import type { Pipe$SinkChannel } from '../../../java/nio/channels/Pipe$SinkChannel.d.ts'
import type { Pipe$SourceChannel } from '../../../java/nio/channels/Pipe$SourceChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Pipe extends Object {
    static open(): Pipe;
    constructor()
    sink(): Pipe$SinkChannel;
    source(): Pipe$SourceChannel;
}