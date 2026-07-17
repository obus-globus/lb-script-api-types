import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { MDC$MDCCloseable } from '../../org/slf4j/MDC$MDCCloseable.d.ts'
import type { MDCAdapter } from '../../org/slf4j/spi/MDCAdapter.d.ts'
export class MDC extends Object {
    static clear(): void;
    static get(paramarg0: string): string;
    static getCopyOfContextMap(): JavaMap<string, string>;
    static getMDCAdapter(): MDCAdapter;
    static popByKey(paramarg0: string): string;
    static pushByKey(paramarg0: string, paramarg1: string): void;
    static put(paramarg0: string, paramarg1: string): void;
    static putCloseable(paramarg0: string, paramarg1: string): MDC$MDCCloseable;
    static remove(paramarg0: string): void;
    static setContextMap(paramarg0: JavaMap<string, string>): void;
    private constructor()
    getCopyOfDequeByKey(arg0: string): string[];
}