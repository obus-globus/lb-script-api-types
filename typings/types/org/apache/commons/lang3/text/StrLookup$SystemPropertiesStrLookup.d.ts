import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
export class StrLookup$SystemPropertiesStrLookup extends StrLookup<string> {
    static mapLookup<V extends unknown>(paramarg0: JavaMap<string, V>): StrLookup<V>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    private constructor()
    lookup(arg0: string): string;
}