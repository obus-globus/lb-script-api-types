import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CurrencyMetaInfo$CurrencyFilter extends Object {
    static all(): CurrencyMetaInfo$CurrencyFilter;
    static now(): CurrencyMetaInfo$CurrencyFilter;
    static onCurrency(paramcurrency: string): CurrencyMetaInfo$CurrencyFilter;
    static onDate(paramdate: Date): CurrencyMetaInfo$CurrencyFilter;
    static onDate(paramdate: number): CurrencyMetaInfo$CurrencyFilter;
    static onDateRange(paramfrom: Date, paramto: Date): CurrencyMetaInfo$CurrencyFilter;
    static onDateRange(paramfrom: number, paramto: number): CurrencyMetaInfo$CurrencyFilter;
    static onRegion(paramregion: string): CurrencyMetaInfo$CurrencyFilter;
    static onTender(): CurrencyMetaInfo$CurrencyFilter;
    private constructor(region: string, currency: string, from: number, to: number, tenderOnly: boolean)
    currency: string;
    from: number;
    region: string;
    tenderOnly: boolean;
    to: number;
    equals(rhs: Object | null): boolean;
    equals(rhs: CurrencyMetaInfo$CurrencyFilter): boolean;
    hashCode(): number;
    toString(): string;
    withCurrency(currency: string): CurrencyMetaInfo$CurrencyFilter;
    withDate(date: Date): CurrencyMetaInfo$CurrencyFilter;
    withDate(date: number): CurrencyMetaInfo$CurrencyFilter;
    withDateRange(from: Date, to: Date): CurrencyMetaInfo$CurrencyFilter;
    withDateRange(from: number, to: number): CurrencyMetaInfo$CurrencyFilter;
    withRegion(region: string): CurrencyMetaInfo$CurrencyFilter;
    withTender(): CurrencyMetaInfo$CurrencyFilter;
}