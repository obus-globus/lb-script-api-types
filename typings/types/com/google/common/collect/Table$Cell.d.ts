import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Table$Cell<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    getColumnKey(): C;
    getRowKey(): R;
    getValue(): V;
}