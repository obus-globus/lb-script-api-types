import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Insight$SymbolProvider extends Object{
    symbolsWithValues(): { [key: string]: Object | null };
}