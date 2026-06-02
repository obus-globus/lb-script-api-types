import type { JdkAlpnSslEngine$AlpnSelector } from '../../../../io/netty/handler/ssl/JdkAlpnSslEngine$AlpnSelector.d.ts'
import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListener } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListener.d.ts'
import type { JdkSslEngine } from '../../../../io/netty/handler/ssl/JdkSslEngine.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLEngineResult } from '../../../../javax/net/ssl/SSLEngineResult.d.ts'
export class JdkAlpnSslEngine extends JdkSslEngine {
    constructor(arg0: SSLEngine, arg1: JdkApplicationProtocolNegotiator, arg2: boolean)
    constructor(arg0: SSLEngine, arg1: JdkApplicationProtocolNegotiator, arg2: boolean, arg3: (param0: SSLEngine, param1: JdkAlpnSslEngine$AlpnSelector) => void, arg4: (param0: SSLEngine, param1: string[]) => void)
    // private alpnSelector: JdkAlpnSslEngine$AlpnSelector;
    // private selectionListener: JdkApplicationProtocolNegotiator$ProtocolSelectionListener;
    getApplicationProtocol(): string;
    getHandshakeApplicationProtocol(): string;
    getHandshakeApplicationProtocolSelector(): (param0: SSLEngine, param1: string[]) => string;
    getNegotiatedApplicationProtocol(): string;
    setHandshakeApplicationProtocolSelector(arg0: (param0: SSLEngine, param1: string[]) => string): void;
    setNegotiatedApplicationProtocol(arg0: string): void;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer[]): SSLEngineResult;
    unwrap(arg0: ByteBuffer, arg1: ByteBuffer[], arg2: number, arg3: number): SSLEngineResult;
    // private verifyProtocolSelection(arg0: SSLEngineResult): SSLEngineResult;
    wrap(arg0: ByteBuffer, arg1: ByteBuffer): SSLEngineResult;
    wrap(arg0: ByteBuffer[], arg1: ByteBuffer): SSLEngineResult;
    wrap(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: ByteBuffer): SSLEngineResult;
}