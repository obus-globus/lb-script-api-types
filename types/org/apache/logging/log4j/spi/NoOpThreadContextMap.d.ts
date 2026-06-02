import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
export class NoOpThreadContextMap extends Object implements ThreadContextMap {
    static INSTANCE: ThreadContextMap;
    constructor()
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getCopy(): { [key: string]: string };
    getImmutableMapOrNull(): { [key: string]: string };
    isEmpty(): boolean;
    put(key: string, value: string): void;
    remove(key: string): void;
}