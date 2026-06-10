import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CleanableThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/CleanableThreadContextMap.d.ts'
export interface ObjectThreadContextMap extends Object, CleanableThreadContextMap{
    getValue<V extends Object | number | string | boolean>(key: string): V;
    putAllValues<V extends Object | number | string | boolean>(values: { [key: string]: V }): void;
    putValue<V extends Object | number | string | boolean>(key: string, value: V): void;
}