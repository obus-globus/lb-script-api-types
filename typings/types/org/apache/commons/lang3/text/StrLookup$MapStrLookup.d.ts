import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
export class StrLookup$MapStrLookup<V extends unknown> extends StrLookup<V> {
    static mapLookup<V extends unknown>(paramarg0: JavaMap<string, V>): StrLookup<V>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    constructor(arg0: JavaMap<string, V>)
    // private map: JavaMap<string, V>;
    lookup(arg0: string): string;
}