import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { AbstractReferenceCounted } from '../../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InternalAttribute extends AbstractReferenceCounted implements InterfaceHttpData {
    constructor(arg0: Charset)
    // private charset: Charset;
    // private size: number;
    // private value: ByteBuf[];
    addValue(arg0: string): void;
    addValue(arg0: string, arg1: number): void;
    compareTo(arg0: InterfaceHttpData): number;
    compareTo(arg0: InternalAttribute): number;
    deallocate(): void;
    equals(arg0: Object | null): boolean;
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getName(): string;
    hashCode(): number;
    retain(): InterfaceHttpData;
    retain(arg0: number): InterfaceHttpData;
    setValue(arg0: string, arg1: number): void;
    size(): number;
    toByteBuf(): ByteBuf;
    toString(): string;
    touch(): InterfaceHttpData;
    touch(arg0: Object): InterfaceHttpData;
}