import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { SSLEngine } from '../../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class BouncyCastleUtil extends Object {
    static getBcProviderJce(): Provider;
    static getBcProviderJsse(): Provider;
    static getBcSSLEngineClass(): Class<Object>;
    static isBcJsseInUse(paramarg0: SSLEngine): boolean;
    static isBcPkixAvailable(): boolean;
    static isBcProvAvailable(): boolean;
    static isBcTlsAvailable(): boolean;
    static unavailabilityCauseBcPkix(): Throwable;
    static unavailabilityCauseBcProv(): Throwable;
    static unavailabilityCauseBcTls(): Throwable;
    private constructor()
}