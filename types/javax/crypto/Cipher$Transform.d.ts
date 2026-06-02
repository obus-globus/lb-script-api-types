import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { CipherSpi } from '../../javax/crypto/CipherSpi.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Cipher$Transform extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    // private mode: string;
    // private pad: string;
    // private suffix: string;
    // private transform: string;
    setModePadding(arg0: CipherSpi): void;
    supportsMode(arg0: Provider$Service): number;
    supportsModePadding(arg0: Provider$Service): number;
    supportsPadding(arg0: Provider$Service): number;
}