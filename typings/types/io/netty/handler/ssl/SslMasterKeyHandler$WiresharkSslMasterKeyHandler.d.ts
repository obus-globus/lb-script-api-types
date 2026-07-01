import type { SslMasterKeyHandler } from '../../../../io/netty/handler/ssl/SslMasterKeyHandler.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { SSLSession } from '../../../../javax/net/ssl/SSLSession.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SslMasterKeyHandler$WiresharkSslMasterKeyHandler extends SslMasterKeyHandler {
    static SYSTEM_PROP_KEY: string;
    static ensureSunSslEngineAvailability(): void;
    static isSunSslEngineAvailable(): boolean;
    static newWireSharkSslMasterKeyHandler(): SslMasterKeyHandler;
    static sunSslEngineUnavailabilityCause(): Throwable;
    constructor(arg0: any)
    accept(arg0: SecretKey, arg1: SSLSession): void;
}