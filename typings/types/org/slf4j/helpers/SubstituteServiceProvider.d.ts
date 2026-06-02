import type { Object } from '../../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../../org/slf4j/ILoggerFactory.d.ts'
import type { IMarkerFactory } from '../../../org/slf4j/IMarkerFactory.d.ts'
import type { SubstituteLoggerFactory } from '../../../org/slf4j/helpers/SubstituteLoggerFactory.d.ts'
import type { MDCAdapter } from '../../../org/slf4j/spi/MDCAdapter.d.ts'
import type { SLF4JServiceProvider } from '../../../org/slf4j/spi/SLF4JServiceProvider.d.ts'
export class SubstituteServiceProvider extends Object implements SLF4JServiceProvider {
    constructor()
    readonly loggerFactory: SubstituteLoggerFactory;
    readonly markerFactory: IMarkerFactory;
    // private mdcAdapter: MDCAdapter;
    getLoggerFactory(): ILoggerFactory;
    getMDCAdapter(): MDCAdapter;
    getMarkerFactory(): IMarkerFactory;
    getRequestedApiVersion(): string;
    getSubstituteLoggerFactory(): SubstituteLoggerFactory;
    initialize(): void;
}