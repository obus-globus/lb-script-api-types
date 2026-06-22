import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { AbstractReferenceCounted } from '../../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractHttpData extends AbstractReferenceCounted implements HttpData {
    constructor(arg0: string, arg1: Charset, arg2: number)
    readonly charset: Charset;
    readonly completed: boolean;
    // private definedSize: number;
    readonly maxSize: number;
    readonly name: string;
    // private size: number;
    addContent(arg0: ByteBuf, arg1: boolean): void;
    checkSize(arg0: number): void;
    content(): ByteBuf;
    copy(): ByteBufHolder;
    copy(): HttpData;
    deallocate(): void;
    definedLength(): number;
    delete(): void;
    duplicate(): ByteBufHolder;
    duplicate(): HttpData;
    getByteBuf(): ByteBuf;
    getCharset(): Charset;
    getChunk(arg0: number): ByteBuf;
    getFile(): File;
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getMaxSize(): number;
    getName(): string;
    getString(): string;
    getString(arg0: Charset): string;
    isCompleted(): boolean;
    isInMemory(): boolean;
    length(): number;
    renameTo(arg0: File): boolean;
    replace(arg0: ByteBuf): ByteBufHolder;
    replace(arg0: ByteBuf): HttpData;
    retain(): HttpData;
    retain(arg0: number): HttpData;
    retainedDuplicate(): ByteBufHolder;
    retainedDuplicate(): HttpData;
    setCharset(arg0: Charset): void;
    setCompleted(): void;
    setCompleted(arg0: boolean): void;
    setContent(arg0: ByteBuf): void;
    setContent(arg0: File): void;
    setContent(arg0: InputStream): void;
    setMaxSize(arg0: number): void;
    touch(): HttpData;
    touch(arg0: Object): HttpData;
}