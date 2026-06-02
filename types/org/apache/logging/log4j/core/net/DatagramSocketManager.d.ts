import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
import type { AbstractSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/AbstractSocketManager.d.ts'
export class DatagramSocketManager extends AbstractSocketManager {
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<Object, Object>): OutputStreamManager;
    static getSocketManager(paramhost: string, paramport: number, paramlayout: Layout<Object>, parambufferSize: number): DatagramSocketManager;
    static hasManager(paramname: string): boolean;
    constructor(name: string, os: OutputStream, inetAddress: InetAddress, host: string, port: number, layout: Layout<Serializable>, bufferSize: number)
    getContentFormat(): { [key: string]: string };
}