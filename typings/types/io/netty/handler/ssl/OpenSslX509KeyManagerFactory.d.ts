import type { OpenSslKeyMaterialProvider } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider.d.ts'
import type { OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi } from '../../../../io/netty/handler/ssl/OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslX509KeyManagerFactory extends KeyManagerFactory {
    static getDefaultAlgorithm(): string;
    static getInstance(paramarg0: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: string): KeyManagerFactory;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): KeyManagerFactory;
    static newEngineBased(paramarg0: File, paramarg1: string): OpenSslX509KeyManagerFactory;
    static newEngineBased(paramarg0: (Object | null)[], paramarg1: string): OpenSslX509KeyManagerFactory;
    static newKeyless(paramarg0: File): OpenSslX509KeyManagerFactory;
    static newKeyless(paramarg0: InputStream): OpenSslX509KeyManagerFactory;
    static newKeyless(paramarg0: (Object | null)[]): OpenSslX509KeyManagerFactory;
    constructor()
    private constructor(arg0: OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi)
    constructor(arg0: { [key: string]: any })
    constructor(arg0: string, arg1: { [key: string]: any })
    // private spi: OpenSslX509KeyManagerFactory$OpenSslKeyManagerFactorySpi;
    newProvider(): OpenSslKeyMaterialProvider;
}