import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Stream$ElementType<E extends Object | number | string | boolean> extends Object{
    isMatchedBy(arg0: E): boolean;
}