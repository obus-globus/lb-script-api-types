import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Put<K extends unknown, V extends unknown> extends Object{
    clear(): void;
    put(arg0: K, arg1: V): Object;
    putAll(arg0: JavaMap<K, V>): void;
}