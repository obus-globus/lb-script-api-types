import type { Object } from '../../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../../org/slf4j/ILoggerFactory.d.ts'
import type { IMarkerFactory } from '../../../org/slf4j/IMarkerFactory.d.ts'
import type { MDCAdapter } from '../../../org/slf4j/spi/MDCAdapter.d.ts'
export interface SLF4JServiceProvider extends Object{
    getLoggerFactory(): ILoggerFactory;
    getMDCAdapter(): MDCAdapter;
    getMarkerFactory(): IMarkerFactory;
    getRequestedApiVersion(): string;
    initialize(): void;
}