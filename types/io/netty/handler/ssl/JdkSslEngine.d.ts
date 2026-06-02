import type { ApplicationProtocolAccessor } from '../../../../io/netty/handler/ssl/ApplicationProtocolAccessor.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLEngineResult } from '../../../../javax/net/ssl/SSLEngineResult.d.ts'
import type { SSLEngineResult$HandshakeStatus } from '../../../../javax/net/ssl/SSLEngineResult$HandshakeStatus.d.ts'
import type { SSLParameters } from '../../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLSession } from '../../../../javax/net/ssl/SSLSession.d.ts'
export class JdkSslEngine extends SSLEngine implements ApplicationProtocolAccessor {
    constructor(arg0: SSLEngine)
    readonly applicationProtocol: string;
    // private engine: SSLEngine;
    beginHandshake(): void;
    closeInbound(): void;
    closeOutbound(): void;
    getDelegatedTask(): () => void;
    getEnableSessionCreation(): boolean;
    getEnabledCipherSuites(): string[];
    getEnabledProtocols(): string[];
    getHandshakeSession(): SSLSession;
    getHandshakeStatus(): SSLEngineResult$HandshakeStatus;
    getNeedClientAuth(): boolean;
    getNegotiatedApplicationProtocol(): string;
    getPeerHost(): string;
    getPeerPort(): number;
    getSSLParameters(): SSLParameters;
    getSession(): SSLSession;
    getSupportedCipherSuites(): string[];
    getSupportedProtocols(): string[];
    getUseClientMode(): boolean;
    getWantClientAuth(): boolean;
    getWrappedEngine(): SSLEngine;
    isInboundDone(): boolean;
    isOutboundDone(): boolean;
    setEnableSessionCreation(arg0: boolean): void;
    setEnabledCipherSuites(arg0: string[]): void;
    setEnabledProtocols(arg0: string[]): void;
    setNeedClientAuth(arg0: boolean): void;
    setNegotiatedApplicationProtocol(arg0: string): void;
    setSSLParameters(arg0: SSLParameters): void;
    setUseClientMode(arg0: boolean): void;
    setWantClientAuth(arg0: boolean): void;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer[]): SSLEngineResult;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer[], arg2: number, arg3: number): SSLEngineResult;
    wrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;
    wrap(arg0: ByteBuffer[], arg1: ByteBuffer): SSLEngineResult;
    wrap(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: ByteBuffer): SSLEngineResult;
}