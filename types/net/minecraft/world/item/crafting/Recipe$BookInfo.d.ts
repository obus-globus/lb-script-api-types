import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Recipe$BookInfo<CategoryType extends Object | number | string | boolean> extends Object{
    category(): CategoryType;
    group(): string;
}