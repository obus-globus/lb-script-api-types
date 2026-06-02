import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface NoSqlObject<W extends Object | number | string | boolean> extends Object{
    set(field: string, value: Object): void;
    set(field: string, values: Object[]): void;
    set(field: string, values: NoSqlObject<W>[]): void;
    set(field: string, value: NoSqlObject<W>): void;
    unwrap(): W;
}