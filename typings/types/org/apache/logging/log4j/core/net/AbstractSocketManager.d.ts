import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { OutputStreamManager } from '../../../../../../org/apache/logging/log4j/core/appender/OutputStreamManager.d.ts'
export abstract class AbstractSocketManager extends OutputStreamManager {
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramname: string, paramdata: Object | null, paramfactory: ManagerFactory<Object, Object>): OutputStreamManager;
    static hasManager(paramname: string): boolean;
    constructor(name: string, os: OutputStream, inetAddress: InetAddress, host: string, port: number, layout: Layout<Serializable>, writeHeader: boolean, bufferSize: number)
    readonly host: string;
    // private inetAddress: InetAddress;
    readonly port: number;
    getContentFormat(): { [key: string]: string };
    getHost(): string;
    getPort(): number;
}