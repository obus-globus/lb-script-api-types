import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Pipe } from '../../../../java/nio/channels/Pipe.d.ts'
import type { AFCore } from '../../../../org/newsclub/net/unix/AFCore.d.ts'
import type { AFPipe$SinkChannel } from '../../../../org/newsclub/net/unix/AFPipe$SinkChannel.d.ts'
import type { AFPipe$SourceChannel } from '../../../../org/newsclub/net/unix/AFPipe$SourceChannel.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
export class AFPipe extends Pipe implements Closeable {
    static open(): Pipe;
    static open(): AFPipe;
    constructor(arg0: AFSelectorProvider<any>, arg1: boolean)
    // private options: number;
    // private sinkChannel: AFPipe$SinkChannel;
    // private sinkCore: AFCore;
    // private sourceChannel: AFPipe$SourceChannel;
    // private sourceCore: AFCore;
    close(): void;
    getOptions(): number;
    sink(): AFPipe$SinkChannel;
    sinkFD(): FileDescriptor;
    source(): AFPipe$SourceChannel;
    sourceFD(): FileDescriptor;
}