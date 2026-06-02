import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { SevenZFile } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFile.d.ts'
import type { AbstractStreamBuilder } from '../../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
export class SevenZFile$Builder extends AbstractStreamBuilder<SevenZFile, SevenZFile$Builder> {
    constructor()
    // private defaultName: string;
    // private maxMemoryLimitKiB: number;
    // private password: number[];
    // private seekableByteChannel: SeekableByteChannel;
    // private tryToRecoverBrokenArchives: boolean;
    // private useDefaultNameForUnnamedEntries: boolean;
    get(): SevenZFile;
    setDefaultName(arg0: string): SevenZFile$Builder;
    setMaxMemoryLimitKb(arg0: number): SevenZFile$Builder;
    setMaxMemoryLimitKiB(arg0: number): SevenZFile$Builder;
    setPassword(arg0: number[]): SevenZFile$Builder;
    setPassword(arg0: string[]): SevenZFile$Builder;
    setPassword(arg0: string): SevenZFile$Builder;
    setSeekableByteChannel(arg0: SeekableByteChannel): SevenZFile$Builder;
    setTryToRecoverBrokenArchives(arg0: boolean): SevenZFile$Builder;
    setUseDefaultNameForUnnamedEntries(arg0: boolean): SevenZFile$Builder;
}