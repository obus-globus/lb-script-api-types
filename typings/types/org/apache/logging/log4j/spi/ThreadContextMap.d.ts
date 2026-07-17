import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThreadContextMap extends Object{
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getCopy(): JavaMap<string, string>;
    getImmutableMapOrNull(): JavaMap<string, string>;
    isEmpty(): boolean;
    put(key: string, value: string): void;
    remove(key: string): void;
}