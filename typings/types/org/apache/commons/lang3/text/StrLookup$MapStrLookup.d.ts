import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
export class StrLookup$MapStrLookup<V extends unknown> extends StrLookup<V> {
    static mapLookup<V extends unknown>(paramarg0: { [key: string]: V }): StrLookup<V>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    constructor(arg0: { [key: string]: V })
    // private map: { [key: string]: V };
    lookup(arg0: string): string;
}