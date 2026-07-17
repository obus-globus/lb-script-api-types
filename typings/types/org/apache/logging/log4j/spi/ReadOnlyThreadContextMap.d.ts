import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringMap } from '../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface ReadOnlyThreadContextMap extends Object{
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getCopy(): JavaMap<string, string>;
    getImmutableMapOrNull(): JavaMap<string, string>;
    getReadOnlyContextData(): StringMap;
    isEmpty(): boolean;
}