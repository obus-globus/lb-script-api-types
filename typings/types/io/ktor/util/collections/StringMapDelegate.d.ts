import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringMap } from '../../../../io/ktor/util/collections/StringMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StringMapDelegate extends StringMap, Object{
    readonly map: JavaMap<string, string>;
    get(key: string): string | null;
    remove(key: string): string | null;
    set(key: string, value: string): void;
}