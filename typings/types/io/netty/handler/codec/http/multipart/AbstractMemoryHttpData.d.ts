import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/AbstractHttpData.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractMemoryHttpData extends AbstractHttpData {
    constructor(arg0: string, arg1: Charset, arg2: number)
    readonly byteBuf: ByteBuf;
    // private chunkPosition: number;
    addContent(arg0: ByteBuf, arg1: boolean): void;
    delete(): void;
    get(): number[];
    getByteBuf(): ByteBuf;
    getChunk(arg0: number): ByteBuf;
    getFile(): File;
    getString(): string;
    getString(arg0: Charset): string;
    isInMemory(): boolean;
    renameTo(arg0: File): boolean;
    setContent(arg0: ByteBuf): void;
    setContent(arg0: File): void;
    setContent(arg0: InputStream): void;
    touch(): HttpData;
    touch(arg0: Object): HttpData;
}