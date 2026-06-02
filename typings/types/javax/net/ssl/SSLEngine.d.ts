import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { SSLEngineResult } from '../../../javax/net/ssl/SSLEngineResult.d.ts'
import type { SSLEngineResult$HandshakeStatus } from '../../../javax/net/ssl/SSLEngineResult$HandshakeStatus.d.ts'
import type { SSLParameters } from '../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SSLEngine extends Object {
    constructor()
    constructor(arg0: string, arg1: number)
    readonly peerHost: string;
    readonly peerPort: number;
    beginHandshake(): void;
    closeInbound(): void;
    closeOutbound(): void;
    getApplicationProtocol(): string;
    getDelegatedTask(): () => void;
    getEnableSessionCreation(): boolean;
    getEnabledCipherSuites(): string[];
    getEnabledProtocols(): string[];
    getHandshakeApplicationProtocol(): string;
    getHandshakeApplicationProtocolSelector(): (param0: SSLEngine, param1: string[]) => string;
    getHandshakeSession(): SSLSession;
    getHandshakeStatus(): SSLEngineResult$HandshakeStatus;
    getNeedClientAuth(): boolean;
    getPeerHost(): string;
    getPeerPort(): number;
    getSSLParameters(): SSLParameters;
    getSession(): SSLSession;
    getSupportedCipherSuites(): string[];
    getSupportedProtocols(): string[];
    getUseClientMode(): boolean;
    getWantClientAuth(): boolean;
    isInboundDone(): boolean;
    isOutboundDone(): boolean;
    setEnableSessionCreation(arg0: boolean): void;
    setEnabledCipherSuites(arg0: string[]): void;
    setEnabledProtocols(arg0: string[]): void;
    setHandshakeApplicationProtocolSelector(arg0: (param0: SSLEngine, param1: string[]) => string): void;
    setNeedClientAuth(arg0: boolean): void;
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