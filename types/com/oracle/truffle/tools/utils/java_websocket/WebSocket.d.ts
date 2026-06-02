import type { Draft } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Opcode } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { ReadyState } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/ReadyState.d.ts'
import type { Framedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { IProtocol } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/protocols/IProtocol.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SSLSession } from '../../../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WebSocket extends Object{
    close(): void;
    close(arg0: number): void;
    close(arg0: number, arg1: string): void;
    closeConnection(arg0: number, arg1: string): void;
    getAttachment<T extends Object | number | string | boolean>(): T;
    getDraft(): Draft;
    getLocalSocketAddress(): InetSocketAddress;
    getProtocol(): IProtocol;
    getReadyState(): ReadyState;
    getRemoteSocketAddress(): InetSocketAddress;
    getResourceDescriptor(): string;
    getSSLSession(): SSLSession;
    hasBufferedData(): boolean;
    hasSSLSupport(): boolean;
    isClosed(): boolean;
    isClosing(): boolean;
    isFlushAndClose(): boolean;
    isOpen(): boolean;
    send(arg0: ByteBuffer): void;
    send(arg0: number[]): void;
    send(arg0: string): void;
    sendFragmentedFrame(arg0: Opcode, arg1: ByteBuffer, arg2: boolean): void;
    sendFrame(arg0: Framedata): void;
    sendFrame(arg0: E[]): void;
    sendPing(): void;
    setAttachment<T extends Object | number | string | boolean>(arg0: T): void;
}