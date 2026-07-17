import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Insight$SymbolProvider extends Object{
    symbolsWithValues(): JavaMap<string, Object | null>;
}