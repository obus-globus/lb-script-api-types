import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { SSLSession } from '../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class SslMasterKeyHandler extends ChannelInboundHandlerAdapter {
    static SYSTEM_PROP_KEY: string;
    static ensureSunSslEngineAvailability(): void;
    static isSunSslEngineAvailable(): boolean;
    static newWireSharkSslMasterKeyHandler(): SslMasterKeyHandler;
    static sunSslEngineUnavailabilityCause(): Throwable;
    constructor()
    accept(arg0: SecretKey, arg1: SSLSession): void;
    masterKeyHandlerEnabled(): boolean;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}