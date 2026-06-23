import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ICUCurrencyMetaInfo$Collector<T extends unknown> extends Object{
    collect(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
    collects(): number;
    getList(): T[];
}