import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/AbstractHttpData.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractDiskHttpData extends AbstractHttpData {
    constructor(arg0: string, arg1: Charset, arg2: number)
    readonly file: File;
    // private fileChannel: FileChannel;
    // private isRenamed: boolean;
    addContent(arg0: ByteBuf, arg1: boolean): void;
    delete(): void;
    deleteOnExit(): boolean;
    get(): number[];
    getBaseDirectory(): string;
    getByteBuf(): ByteBuf;
    getChunk(arg0: number): ByteBuf;
    getDiskFilename(): string;
    getFile(): File;
    getPostfix(): string;
    getPrefix(): string;
    getString(): string;
    getString(arg0: Charset): string;
    isInMemory(): boolean;
    renameTo(arg0: File): boolean;
    setContent(arg0: ByteBuf): void;
    setContent(arg0: File): void;
    setContent(arg0: InputStream): void;
    // private tempFile(): File;
    touch(): HttpData;
    touch(arg0: Object): HttpData;
}