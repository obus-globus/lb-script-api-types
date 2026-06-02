import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
export class StrLookup$MapStrLookup<V extends Object | number | string | boolean> extends StrLookup<V> {
    static mapLookup(paramarg0: { [key: string]: Object | null }): StrLookup<Object>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    constructor(arg0: { [key: string]: V })
    // private map: { [key: string]: V };
    lookup(arg0: string): string;
}