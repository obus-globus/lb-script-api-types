import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZipServant$ZipFileEntry extends Object {
    constructor(name: string, data: ByteBuf, isDirectory: boolean)
    readonly data: ByteBuf;
    // private isDirectory: boolean;
    /*not mapped: */ isDirectory(): boolean;
    readonly name: string;
    component1(): string;
    component2(): ByteBuf;
    component3(): boolean;
    copy(name: string, data: ByteBuf, isDirectory: boolean): ZipServant$ZipFileEntry;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toResponse(): FullHttpResponse;
    toString(): string;
}