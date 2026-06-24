import type { StrLookup$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
export class StrLookup$SystemPropertiesStrLookup extends StrLookup<string> {
    static mapLookup(paramarg0: { [key: string]: Object | null }): StrLookup<Object>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    private constructor()
    constructor(arg0: StrLookup$1)
    lookup(arg0: string): string;
}