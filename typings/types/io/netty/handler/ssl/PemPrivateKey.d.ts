import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { PemEncoded } from '../../../../io/netty/handler/ssl/PemEncoded.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PemPrivateKey extends AbstractReferenceCounted implements PemEncoded, PrivateKey {
    static serialVersionUID: number;
    static serialVersionUID: number;
    static valueOf(paramarg0: number[]): PemPrivateKey;
    static valueOf(paramarg0: ByteBuf): PemPrivateKey;
    private constructor(arg0: ByteBuf)
    // private content: ByteBuf;
    content(): ByteBuf;
    copy(): PemPrivateKey;
    deallocate(): void;
    destroy(): void;
    duplicate(): PemPrivateKey;
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    isDestroyed(): boolean;
    isSensitive(): boolean;
    replace(arg0: ByteBuf): PemPrivateKey;
    retain(): PemPrivateKey;
    retain(arg0: number): PemPrivateKey;
    retainedDuplicate(): PemPrivateKey;
    touch(): PemPrivateKey;
    touch(arg0: Object): PemPrivateKey;
}