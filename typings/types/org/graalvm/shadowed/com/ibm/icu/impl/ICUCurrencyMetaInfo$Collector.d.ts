import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ICUCurrencyMetaInfo$Collector<T extends unknown> extends Object{
    collect(region: string, currency: string, from: number, to: number, priority: number, tender: boolean): void;
    collects(): number;
    getList(): T[];
}