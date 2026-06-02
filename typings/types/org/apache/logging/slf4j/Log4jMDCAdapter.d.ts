import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Log4jMDCAdapter$ThreadLocalMapOfStacks } from '../../../../org/apache/logging/slf4j/Log4jMDCAdapter$ThreadLocalMapOfStacks.d.ts'
import type { MDCAdapter } from '../../../../org/slf4j/spi/MDCAdapter.d.ts'
export class Log4jMDCAdapter extends Object implements MDCAdapter {
    constructor()
    // private mapOfStacks: Log4jMDCAdapter$ThreadLocalMapOfStacks;
    clear(): void;
    clearDequeByKey(key: string): void;
    get(key: string): string;
    getCopyOfContextMap(): { [key: string]: string };
    getCopyOfDequeByKey(key: string): string[];
    popByKey(key: string): string;
    pushByKey(key: string, value: string): void;
    put(key: string, val: string): void;
    remove(key: string): void;
    setContextMap(map: { [key: string]: string }): void;
}