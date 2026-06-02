import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { BufferedFileChannelInputStream } from '../../../../../org/apache/commons/io/input/BufferedFileChannelInputStream.d.ts'
export class BufferedFileChannelInputStream$Builder extends AbstractStreamBuilder<BufferedFileChannelInputStream, BufferedFileChannelInputStream$Builder> {
    constructor()
    // private fileChannel: FileChannel;
    get(): BufferedFileChannelInputStream;
    setFileChannel(arg0: FileChannel): BufferedFileChannelInputStream$Builder;
}