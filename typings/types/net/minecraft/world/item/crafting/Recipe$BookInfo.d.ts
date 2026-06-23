import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Recipe$BookInfo<CategoryType extends unknown> extends Object{
    category(): CategoryType;
    group(): string;
}