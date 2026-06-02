import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { SocketImplFactory } from '../../../java/net/SocketImplFactory.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { HandshakeCompletedListener } from '../../../javax/net/ssl/HandshakeCompletedListener.d.ts'
import type { SSLParameters } from '../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
export abstract class SSLSocket extends Socket {
    static setSocketImplFactory(paramarg0: SocketImplFactory): void;
    constructor()
    constructor(arg0: InetAddress, arg1: number)
    constructor(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: InetAddress, arg3: number)
    addHandshakeCompletedListener(arg0: HandshakeCompletedListener): void;
    getApplicationProtocol(): string;
    getEnableSessionCreation(): boolean;
    getEnabledCipherSuites(): string[];
    getEnabledProtocols(): string[];
    getHandshakeApplicationProtocol(): string;
    getHandshakeApplicationProtocolSelector(): (param0: SSLSocket, param1: string[]) => string;
    getHandshakeSession(): SSLSession;
    getNeedClientAuth(): boolean;
    getSSLParameters(): SSLParameters;
    getSession(): SSLSession;
    getSupportedCipherSuites(): string[];
    getSupportedProtocols(): string[];
    getUseClientMode(): boolean;
    getWantClientAuth(): boolean;
    removeHandshakeCompletedListener(arg0: HandshakeCompletedListener): void;
    setEnableSessionCreation(arg0: boolean): void;
    setEnabledCipherSuites(arg0: string[]): void;
    setEnabledProtocols(arg0: string[]): void;
    setHandshakeApplicationProtocolSelector(arg0: (param0: SSLSocket, param1: string[]) => string): void;
    setNeedClientAuth(arg0: boolean): void;
    setSSLParameters(arg0: SSLParameters): void;
    setUseClientMode(arg0: boolean): void;
    setWantClientAuth(arg0: boolean): void;
    startHandshake(): void;
}