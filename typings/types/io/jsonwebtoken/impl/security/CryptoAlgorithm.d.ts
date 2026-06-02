import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { JcaTemplate } from '../../../../io/jsonwebtoken/impl/security/JcaTemplate.d.ts'
import type { KeyRequest } from '../../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CryptoAlgorithm extends Object implements Identifiable {
    constructor(arg0: string, arg1: string)
    // private ID: string;
    // private jcaName: string;
    equals(arg0: Object | null): boolean;
    generateCek(arg0: KeyRequest<Object>): SecretKey;
    getId(): string;
    getJcaName(): string;
    getJcaName(arg0: Request<Object>): string;
    hashCode(): number;
    jca(): JcaTemplate;
    jca(arg0: Request<Object>): JcaTemplate;
    toString(): string;
}