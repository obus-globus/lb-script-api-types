import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FileUpload extends HttpData, Object{
    addContent(arg0: ByteBuf, arg1: boolean): void;
    checkSize(arg0: number): void;
    content(): ByteBuf;
    copy(): FileUpload;
    definedLength(): number;
    delete(): void;
    duplicate(): FileUpload;
    getByteBuf(): ByteBuf;
    getCharset(): Charset;
    getChunk(arg0: number): ByteBuf;
    getContentTransferEncoding(): string;
    getContentType(): string;
    getFile(): File;
    getFilename(): string;
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getMaxSize(): number;
    getName(): string;
    getString(): string;
    getString(arg0: Charset): string;
    isCompleted(): boolean;
    isInMemory(): boolean;
    length(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    renameTo(arg0: File): boolean;
    replace(arg0: ByteBuf): FileUpload;
    retain(): FileUpload;
    retain(arg0: number): FileUpload;
    retainedDuplicate(): FileUpload;
    setCharset(arg0: Charset): void;
    setContent(arg0: ByteBuf): void;
    setContent(arg0: File): void;
    setContent(arg0: InputStream): void;
    setContentTransferEncoding(arg0: string): void;
    setContentType(arg0: string): void;
    setFilename(arg0: string): void;
    setMaxSize(arg0: number): void;
    touch(): FileUpload;
    touch(arg0: Object): FileUpload;
}