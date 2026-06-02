import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { AbstractReferenceCounted } from '../../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
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
    checkSize(arg0: number): void;
    content(): ByteBuf;
    deallocate(): void;
    definedLength(): number;
    getCharset(): Charset;
    getMaxSize(): number;
    getName(): string;
    isCompleted(): boolean;
    length(): number;
    retain(): HttpData;
    retain(arg0: number): HttpData;
    setCharset(arg0: Charset): void;
    setCompleted(): void;
    setCompleted(arg0: boolean): void;
    setMaxSize(arg0: number): void;
    touch(): HttpData;
    touch(arg0: Object): HttpData;
}