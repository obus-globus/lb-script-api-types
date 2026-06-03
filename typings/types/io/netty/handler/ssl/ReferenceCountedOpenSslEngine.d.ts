import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ApplicationProtocolAccessor } from '../../../../io/netty/handler/ssl/ApplicationProtocolAccessor.d.ts'
import type { ClientAuth } from '../../../../io/netty/handler/ssl/ClientAuth.d.ts'
import type { OpenSslApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/OpenSslApplicationProtocolNegotiator.d.ts'
import type { OpenSslInternalSession } from '../../../../io/netty/handler/ssl/OpenSslInternalSession.d.ts'
import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { ReferenceCountedOpenSslContext } from '../../../../io/netty/handler/ssl/ReferenceCountedOpenSslContext.d.ts'
import type { ReferenceCountedOpenSslEngine$HandshakeState } from '../../../../io/netty/handler/ssl/ReferenceCountedOpenSslEngine$HandshakeState.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { ResourceLeakTracker } from '../../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AlgorithmConstraints } from '../../../../java/security/AlgorithmConstraints.d.ts'
import type { SecretKeySpec } from '../../../../javax/crypto/spec/SecretKeySpec.d.ts'
import type { SNIServerName } from '../../../../javax/net/ssl/SNIServerName.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLEngineResult } from '../../../../javax/net/ssl/SSLEngineResult.d.ts'
import type { SSLEngineResult$HandshakeStatus } from '../../../../javax/net/ssl/SSLEngineResult$HandshakeStatus.d.ts'
import type { SSLEngineResult$Status } from '../../../../javax/net/ssl/SSLEngineResult$Status.d.ts'
import type { SSLException } from '../../../../javax/net/ssl/SSLException.d.ts'
import type { SSLParameters } from '../../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLSession } from '../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ReferenceCountedOpenSslEngine extends SSLEngine implements ApplicationProtocolAccessor, ReferenceCounted {
    constructor(arg0: ReferenceCountedOpenSslContext, arg1: ByteBufAllocator, arg2: string, arg3: number, arg4: boolean, arg5: boolean, arg6: string, arg7: SNIServerName[])
    // private algorithmConstraints: AlgorithmConstraints;
    // private alloc: ByteBufAllocator;
    // private apn: OpenSslApplicationProtocolNegotiator;
    readonly applicationProtocol: string;
    // private clientAuth: ClientAuth;
    // private clientMode: boolean;
    // private destroyed: boolean;
    // private enableOcsp: boolean;
    readonly enabledProtocols: string[];
    // private endpointIdentificationAlgorithm: string;
    // private engines: { [key: number]: ReferenceCountedOpenSslEngine };
    // private groups: string[];
    // private handshakeState: ReferenceCountedOpenSslEngine$HandshakeState;
    // private hasTLSv13Cipher: boolean;
    // private isInboundDone: boolean;
    // private jdkCompatibilityMode: boolean;
    // private leak: ResourceLeakTracker<ReferenceCountedOpenSslEngine>;
    // private matchers: E[];
    // private maxWrapBufferSize: number;
    // private maxWrapOverhead: number;
    // private needTask: boolean;
    // private networkBIO: number;
    // private outboundClosed: boolean;
    // private parentContext: ReferenceCountedOpenSslContext;
    // private pendingException: Throwable;
    // private receivedShutdown: boolean;
    // private refCnt: AbstractReferenceCounted;
    // private serverNames: SNIServerName[];
    readonly session: OpenSslInternalSession;
    // private sessionSet: boolean;
    // private singleDstBuffer: ByteBuffer[];
    // private singleSrcBuffer: ByteBuffer[];
    // private ssl: number;
    authMethods(): string[];
    beginHandshake(): void;
    bioSetFd(arg0: number): void;
    calculateMaxLengthForWrap(arg0: number, arg1: number): number;
    // private calculateMaxWrapOverhead(): void;
    calculateOutNetBufSize(arg0: number, arg1: number): number;
    // private checkEngineClosed(): void;
    checkSniHostnameMatch(arg0: number[]): boolean;
    // private closeAll(): void;
    closeInbound(): void;
    closeOutbound(): void;
    // private configureEndpointVerification(arg0: string): void;
    // private doSSLShutdown(): boolean;
    getApplicationProtocol(): string;
    getDelegatedTask(): () => void;
    getEnableSessionCreation(): boolean;
    getEnabledCipherSuites(): string[];
    getEnabledProtocols(): string[];
    getHandshakeApplicationProtocol(): string;
    getHandshakeSession(): SSLSession;
    getHandshakeStatus(): SSLEngineResult$HandshakeStatus;
    // private getHandshakeStatus(arg0: number): SSLEngineResult$HandshakeStatus;
    getNeedClientAuth(): boolean;
    getNegotiatedApplicationProtocol(): string;
    getOcspResponse(): number[];
    getSSLParameters(): SSLParameters;
    getSession(): SSLSession;
    getSupportedCipherSuites(): string[];
    getSupportedProtocols(): string[];
    getUseClientMode(): boolean;
    getWantClientAuth(): boolean;
    // private handleUnwrapException(arg0: number, arg1: number, arg2: SSLException): SSLEngineResult;
    // private handshake(): SSLEngineResult$HandshakeStatus;
    // private handshakeException(): SSLEngineResult$HandshakeStatus;
    initHandshakeException(arg0: Throwable): void;
    // private isBytesAvailableEnoughForWrap(arg0: number, arg1: number, arg2: number): boolean;
    isInboundDone(): boolean;
    isOutboundDone(): boolean;
    isSessionReused(): boolean;
    masterKey(): SecretKeySpec;
    maxEncryptedPacketLength(): number;
    maxEncryptedPacketLength0(): number;
    maxWrapOverhead(): number;
    // private mayFinishHandshake(arg0: SSLEngineResult$HandshakeStatus): SSLEngineResult$HandshakeStatus;
    // private mayFinishHandshake(arg0: SSLEngineResult$HandshakeStatus, arg1: number, arg2: number): SSLEngineResult$HandshakeStatus;
    // private needPendingStatus(): boolean;
    // private needWrapAgain(arg0: number): boolean;
    // private newResult(arg0: SSLEngineResult$HandshakeStatus, arg1: number, arg2: number): SSLEngineResult;
    // private newResult(arg0: SSLEngineResult$Status, arg1: SSLEngineResult$HandshakeStatus, arg2: number, arg3: number): SSLEngineResult;
    // private newResultMayFinishHandshake(arg0: SSLEngineResult$HandshakeStatus, arg1: number, arg2: number): SSLEngineResult;
    // private newResultMayFinishHandshake(arg0: SSLEngineResult$Status, arg1: SSLEngineResult$HandshakeStatus, arg2: number, arg3: number): SSLEngineResult;
    // private newSSLExceptionForError(arg0: number): SSLException;
    // private readPlaintextData(arg0: ByteBuffer): number;
    refCnt(): number;
    // private rejectRemoteInitiatedRenegotiation(): void;
    release(): boolean;
    release(arg0: number): boolean;
    // private resetSingleDstBuffer(): void;
    // private resetSingleSrcBuffer(): void;
    retain(): ReferenceCounted;
    retain(arg0: number): ReferenceCounted;
    // private runAndResetNeedTask(arg0: () => void): void;
    // private selectApplicationProtocol(): void;
    // private setClientAuth(arg0: ClientAuth): void;
    setEnableSessionCreation(arg0: boolean): void;
    setEnabledCipherSuites(arg0: string[]): void;
    setEnabledProtocols(arg0: string[]): void;
    // private setEnabledProtocols0(arg0: string[], arg1: boolean): void;
    setKeyMaterial(arg0: OpenSslKeyMaterial): void;
    setNeedClientAuth(arg0: boolean): void;
    setOcspResponse(arg0: number[]): void;
    setSSLParameters(arg0: SSLParameters): void;
    setUseClientMode(arg0: boolean): void;
    setVerify(arg0: number, arg1: number): void;
    setWantClientAuth(arg0: boolean): void;
    shutdown(): void;
    // private shutdownWithError(arg0: string, arg1: number, arg2: number): SSLException;
    // private singleDstBuffer(arg0: ByteBuffer): ByteBuffer[];
    // private singleSrcBuffer(arg0: ByteBuffer): ByteBuffer[];
    sslPending(): number;
    // private sslPending0(): number;
    sslPointer(): number;
    // private sslReadErrorResult(arg0: number, arg1: number, arg2: number, arg3: number): SSLEngineResult;
    // private toJavaCipherSuite(arg0: string): string;
    touch(): ReferenceCounted;
    touch(arg0: Object): ReferenceCounted;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer[]): SSLEngineResult;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer[], arg2: number, arg3: number): SSLEngineResult;
    unwrap(arg0: ByteBuffer[], arg1: ByteBuffer[]): SSLEngineResult;
    unwrap(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: ByteBuffer[], arg4: number, arg5: number): SSLEngineResult;
    wrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;
    wrap(arg0: ByteBuffer[], arg1: ByteBuffer): SSLEngineResult;
    wrap(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: ByteBuffer): SSLEngineResult;
    // private writeEncryptedData(arg0: ByteBuffer, arg1: number): ByteBuf;
    // private writePlaintextData(arg0: ByteBuffer, arg1: number): number;
}