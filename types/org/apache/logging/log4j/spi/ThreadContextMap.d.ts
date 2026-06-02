import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThreadContextMap extends Object{
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getCopy(): { [key: string]: string };
    getImmutableMapOrNull(): { [key: string]: string };
    isEmpty(): boolean;
    put(key: string, value: string): void;
    remove(key: string): void;
}