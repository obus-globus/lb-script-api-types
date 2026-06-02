import type { ServerSocketFactory } from '../../../javax/net/ServerSocketFactory.d.ts'
export abstract class SSLServerSocketFactory extends ServerSocketFactory {
    static getDefault(): ServerSocketFactory;
    constructor()
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
}