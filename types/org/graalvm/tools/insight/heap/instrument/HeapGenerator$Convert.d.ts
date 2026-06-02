import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HeapGenerator$Convert<T extends Object | number | string | boolean> extends Object{
    convert(obj: Object): T;
}