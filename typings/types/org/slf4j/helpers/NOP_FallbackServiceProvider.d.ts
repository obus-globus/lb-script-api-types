import type { Object } from '../../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../../org/slf4j/ILoggerFactory.d.ts'
import type { IMarkerFactory } from '../../../org/slf4j/IMarkerFactory.d.ts'
import type { MDCAdapter } from '../../../org/slf4j/spi/MDCAdapter.d.ts'
import type { SLF4JServiceProvider } from '../../../org/slf4j/spi/SLF4JServiceProvider.d.ts'
export class NOP_FallbackServiceProvider extends Object implements SLF4JServiceProvider {
    static REQUESTED_API_VERSION: string;
    constructor()
    readonly loggerFactory: ILoggerFactory;
    readonly markerFactory: IMarkerFactory;
    // private mdcAdapter: MDCAdapter;
    getLoggerFactory(): ILoggerFactory;
    getMDCAdapter(): MDCAdapter;
    getMarkerFactory(): IMarkerFactory;
    getRequestedApiVersion(): string;
    initialize(): void;
}