import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslPrivateKey extends AbstractReferenceCounted implements PrivateKey {
    static serialVersionUID: number;
    static serialVersionUID: number;
    constructor(arg0: number)
    // private privateKeyAddress: number;
    deallocate(): void;
    destroy(): void;
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    isDestroyed(): boolean;
    newKeyMaterial(arg0: number, arg1: X509Certificate[]): OpenSslKeyMaterial;
    privateKeyAddress(): number;
    retain(): OpenSslPrivateKey;
    retain(arg0: number): OpenSslPrivateKey;
    touch(): OpenSslPrivateKey;
    touch(arg0: Object): OpenSslPrivateKey;
}