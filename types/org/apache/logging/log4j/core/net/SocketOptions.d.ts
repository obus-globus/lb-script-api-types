import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { Rfc1349TrafficClass } from '../../../../../../org/apache/logging/log4j/core/net/Rfc1349TrafficClass.d.ts'
import type { SocketPerformancePreferences } from '../../../../../../org/apache/logging/log4j/core/net/SocketPerformancePreferences.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SocketOptions extends Object implements Cloneable, Builder<SocketOptions> {
    static newBuilder(): SocketOptions;
    constructor()
    // private keepAlive: boolean;
    // private oobInline: boolean;
    readonly performancePreferences: SocketPerformancePreferences;
    readonly receiveBufferSize: number;
    // private reuseAddress: boolean;
    readonly rfc1349TrafficClass: Rfc1349TrafficClass;
    readonly sendBufferSize: number;
    readonly soLinger: number;
    readonly soTimeout: number;
    // private tcpNoDelay: boolean;
    readonly trafficClass: number;
    apply(socket: Socket): void;
    build(): SocketOptions;
    protected clone(): Object;
    getActualTrafficClass(): number;
    getErrorPrefix(): string;
    getPerformancePreferences(): SocketPerformancePreferences;
    getReceiveBufferSize(): number;
    getRfc1349TrafficClass(): Rfc1349TrafficClass;
    getSendBufferSize(): number;
    getSoLinger(): number;
    getSoTimeout(): number;
    getTrafficClass(): number;
    isKeepAlive(): boolean;
    isOobInline(): boolean;
    isReuseAddress(): boolean;
    isTcpNoDelay(): boolean;
    isValid(): boolean;
    setKeepAlive(keepAlive: boolean): SocketOptions;
    setOobInline(oobInline: boolean): SocketOptions;
    setPerformancePreferences(performancePreferences: SocketPerformancePreferences): SocketOptions;
    setReceiveBufferSize(receiveBufferSize: number): SocketOptions;
    setReuseAddress(reuseAddress: boolean): SocketOptions;
    setRfc1349TrafficClass(trafficClass: Rfc1349TrafficClass): SocketOptions;
    setSendBufferSize(sendBufferSize: number): SocketOptions;
    setSoLinger(soLinger: number): SocketOptions;
    setSoTimeout(soTimeout: number): SocketOptions;
    setTcpNoDelay(tcpNoDelay: boolean): SocketOptions;
    setTrafficClass(trafficClass: number): SocketOptions;
    toString(): string;
}