import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { OpenSslKeyMaterialProvider } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
export class OpenSslCachingX509KeyManagerFactory extends KeyManagerFactory {
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: JavaMap<any, any>): KeyManagerFactory;
    constructor(arg0: KeyManagerFactory)
    constructor(arg0: KeyManagerFactory, arg1: number)
    // private maxCachedEntries: number;
    newProvider(arg0: string): OpenSslKeyMaterialProvider;
}