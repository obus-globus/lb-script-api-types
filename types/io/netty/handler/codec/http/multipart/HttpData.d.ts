import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HttpData extends ByteBufHolder, InterfaceHttpData, Object{
    addContent(arg0: ByteBuf, arg1: boolean): void;
    checkSize(arg0: number): void;
    copy(): HttpData;
    definedLength(): number;
    delete(): void;
    duplicate(): HttpData;
    get(): number[];
    getByteBuf(): ByteBuf;
    getCharset(): Charset;
    getChunk(arg0: number): ByteBuf;
    getFile(): File;
    getMaxSize(): number;
    getString(): string;
    getString(arg0: Charset): string;
    isCompleted(): boolean;
    isInMemory(): boolean;
    length(): number;
    renameTo(arg0: File): boolean;
    replace(arg0: ByteBuf): HttpData;
    retain(): HttpData;
    retain(arg0: number): HttpData;
    retainedDuplicate(): HttpData;
    setCharset(arg0: Charset): void;
    setContent(arg0: ByteBuf): void;
    setContent(arg0: File): void;
    setContent(arg0: InputStream): void;
    setMaxSize(arg0: number): void;
    touch(): HttpData;
    touch(arg0: Object): HttpData;
}