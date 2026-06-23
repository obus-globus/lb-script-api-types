import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Table$Cell<R extends unknown, C extends unknown, V extends unknown> extends Object{
    getColumnKey(): C;
    getRowKey(): R;
    getValue(): V;
}