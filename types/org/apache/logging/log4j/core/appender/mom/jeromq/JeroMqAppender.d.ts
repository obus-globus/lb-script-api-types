import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { JeroMqManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/mom/jeromq/JeroMqManager.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class JeroMqAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramname: string, paramlayout: Layout<Object>, paramfilter: Filter, paramproperties: (Object | null)[], paramignoreExceptions: boolean, paramaffinity: number, parambacklog: number, paramdelayAttachOnConnect: boolean, paramidentity: number[], paramipv4Only: boolean, paramlinger: number, parammaxMsgSize: number, paramrcvHwm: number, paramreceiveBufferSize: number, paramreceiveTimeOut: number, paramreconnectIVL: number, paramreconnectIVLMax: number, paramsendBufferSize: number, paramsendTimeOut: number, paramsndHwm: number, paramtcpKeepAlive: number, paramtcpKeepAliveCount: number, paramtcpKeepAliveIdle: number, paramtcpKeepAliveInterval: number, paramxpubVerbose: boolean): JeroMqAppender;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string, filter: Filter, layout: Layout<Serializable>, ignoreExceptions: boolean, endpoints: string[], affinity: number, backlog: number, delayAttachOnConnect: boolean, identity: number[], ipv4Only: boolean, linger: number, maxMsgSize: number, rcvHwm: number, receiveBufferSize: number, receiveTimeOut: number, reconnectIVL: number, reconnectIVLMax: number, sendBufferSize: number, sendTimeOut: number, sndHWM: number, tcpKeepAlive: number, tcpKeepAliveCount: number, tcpKeepAliveIdle: number, tcpKeepAliveInterval: number, xpubVerbose: boolean, properties: Property[])
    // private endpoints: string[];
    // private manager: JeroMqManager;
    // private sendRcFalse: number;
    // private sendRcTrue: number;
    append(event: LogEvent): void;
    getManager(): JeroMqManager;
    getSendRcFalse(): number;
    getSendRcTrue(): number;
    resetSendRcs(): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    toString(): string;
}