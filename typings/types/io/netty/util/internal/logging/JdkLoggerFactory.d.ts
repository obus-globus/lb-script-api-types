import type { InternalLogger } from '../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { InternalLoggerFactory } from '../../../../../io/netty/util/internal/logging/InternalLoggerFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JdkLoggerFactory extends InternalLoggerFactory {
    static INSTANCE: InternalLoggerFactory;
    static getDefaultFactory(): InternalLoggerFactory;
    static getInstance(paramarg0: Class<Object>): InternalLogger;
    static getInstance(paramarg0: string): InternalLogger;
    static setDefaultFactory(paramarg0: InternalLoggerFactory): void;
    constructor()
    newInstance(arg0: string): InternalLogger;
}