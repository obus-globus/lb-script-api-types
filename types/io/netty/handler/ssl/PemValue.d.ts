import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { PemEncoded } from '../../../../io/netty/handler/ssl/PemEncoded.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PemValue extends AbstractReferenceCounted implements PemEncoded {
    constructor(arg0: ByteBuf, arg1: boolean)
    // private content: ByteBuf;
    readonly sensitive: boolean;
    content(): ByteBuf;
    copy(): PemValue;
    deallocate(): void;
    duplicate(): PemValue;
    isSensitive(): boolean;
    replace(arg0: ByteBuf): PemValue;
    retain(): PemValue;
    retain(arg0: number): PemValue;
    retainedDuplicate(): PemValue;
    touch(): PemValue;
    touch(arg0: Object): PemValue;
}