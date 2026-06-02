import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { AbstractReferenceCounted } from '../../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractMixedHttpData<D extends HttpData> extends AbstractReferenceCounted implements HttpData {
    constructor(arg0: number, arg1: string, arg2: boolean, arg3: D)
    // private baseDir: string;
    // private deleteOnExit: boolean;
    // private limitSize: number;
    // private wrapped: D;
    addContent(arg0: ByteBuf, arg1: boolean): void;
    checkSize(arg0: number): void;
    compareTo(arg0: InterfaceHttpData): number;
    content(): ByteBuf;
    copy(): D;
    deallocate(): void;
    definedLength(): number;
    delete(): void;
    duplicate(): D;
    equals(arg0: Object | null): boolean;
    get(): number[];
    getByteBuf(): ByteBuf;
    getCharset(): Charset;
    getChunk(arg0: number): ByteBuf;
    getFile(): File;
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getMaxSize(): number;
    getName(): string;
    getString(): string;
    getString(arg0: Charset): string;
    hashCode(): number;
    isCompleted(): boolean;
    isInMemory(): boolean;
    length(): number;
    makeDiskData(): D;
    renameTo(arg0: File): boolean;
    replace(arg0: ByteBuf): D;
    retain(): D;
    retain(arg0: number): D;
    retainedDuplicate(): D;
    setCharset(arg0: Charset): void;
    setContent(arg0: ByteBuf): void;
    setContent(arg0: File): void;
    setContent(arg0: InputStream): void;
    setMaxSize(arg0: number): void;
    toString(): string;
    touch(): D;
    touch(arg0: Object): D;
}