import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MDCAdapter } from '../../../org/slf4j/spi/MDCAdapter.d.ts'
export class NOPMDCAdapter extends Object implements MDCAdapter {
    constructor()
    clear(): void;
    clearDequeByKey(arg0: string): void;
    get(arg0: string): string;
    getCopyOfContextMap(): JavaMap<string, string>;
    getCopyOfDequeByKey(arg0: string): string[];
    popByKey(arg0: string): string;
    pushByKey(arg0: string, arg1: string): void;
    put(arg0: string, arg1: string): void;
    remove(arg0: string): void;
    setContextMap(arg0: JavaMap<string, string>): void;
}