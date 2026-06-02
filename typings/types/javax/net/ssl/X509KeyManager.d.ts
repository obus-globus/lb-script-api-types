import type { Socket } from '../../../java/net/Socket.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { KeyManager } from '../../../javax/net/ssl/KeyManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509KeyManager extends KeyManager, Object{
    chooseClientAlias(arg0: string[], arg1: Principal[], arg2: Socket): string;
    chooseServerAlias(arg0: string, arg1: Principal[], arg2: Socket): string;
    getCertificateChain(arg0: string): X509Certificate[];
    getClientAliases(arg0: string, arg1: Principal[]): string[];
    getPrivateKey(arg0: string): PrivateKey;
    getServerAliases(arg0: string, arg1: Principal[]): string[];
}