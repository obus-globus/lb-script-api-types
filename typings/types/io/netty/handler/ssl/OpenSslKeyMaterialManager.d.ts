import type { OpenSslKeyMaterialProvider } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider.d.ts'
import type { ReferenceCountedOpenSslEngine } from '../../../../io/netty/handler/ssl/ReferenceCountedOpenSslEngine.d.ts'
import type { X500Principal } from '../../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslKeyMaterialManager extends Object {
    constructor(arg0: OpenSslKeyMaterialProvider, arg1: boolean)
    // private hasTmpDhKeys: boolean;
    // private provider: OpenSslKeyMaterialProvider;
    // private chooseClientAlias(arg0: ReferenceCountedOpenSslEngine, arg1: string[], arg2: X500Principal[]): string;
    // private chooseServerAlias(arg0: ReferenceCountedOpenSslEngine, arg1: string): string;
    // private setKeyMaterial(arg0: ReferenceCountedOpenSslEngine, arg1: string): void;
    setKeyMaterialClientSide(arg0: ReferenceCountedOpenSslEngine, arg1: string[], arg2: X500Principal[]): void;
    setKeyMaterialServerSide(arg0: ReferenceCountedOpenSslEngine): void;
}