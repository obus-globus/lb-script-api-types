import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CurrencyMetaInfo$CurrencyFilter extends Object {
    static all(): CurrencyMetaInfo$CurrencyFilter;
    static now(): CurrencyMetaInfo$CurrencyFilter;
    static onCurrency(paramarg0: string): CurrencyMetaInfo$CurrencyFilter;
    static onDate(paramarg0: Date): CurrencyMetaInfo$CurrencyFilter;
    static onDate(paramarg0: number): CurrencyMetaInfo$CurrencyFilter;
    static onDateRange(paramarg0: Date, paramarg1: Date): CurrencyMetaInfo$CurrencyFilter;
    static onDateRange(paramarg0: number, paramarg1: number): CurrencyMetaInfo$CurrencyFilter;
    static onRegion(paramarg0: string): CurrencyMetaInfo$CurrencyFilter;
    static onTender(): CurrencyMetaInfo$CurrencyFilter;
    private constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: boolean)
    currency: string;
    from: number;
    region: string;
    tenderOnly: boolean;
    to: number;
    equals(arg0: CurrencyMetaInfo$CurrencyFilter): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    withCurrency(arg0: string): CurrencyMetaInfo$CurrencyFilter;
    withDate(arg0: Date): CurrencyMetaInfo$CurrencyFilter;
    withDate(arg0: number): CurrencyMetaInfo$CurrencyFilter;
    withDateRange(arg0: Date, arg1: Date): CurrencyMetaInfo$CurrencyFilter;
    withDateRange(arg0: number, arg1: number): CurrencyMetaInfo$CurrencyFilter;
    withRegion(arg0: string): CurrencyMetaInfo$CurrencyFilter;
    withTender(): CurrencyMetaInfo$CurrencyFilter;
}