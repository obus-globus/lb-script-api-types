import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
export class StrLookup$SystemPropertiesStrLookup extends StrLookup<string> {
    static mapLookup(paramarg0: { [key: string]: Object | null }): StrLookup<Object>;
    static noneLookup(): StrLookup<Object>;
    static systemPropertiesLookup(): StrLookup<string>;
    constructor(arg0: any)
    lookup(arg0: string): string;
}