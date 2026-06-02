import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ChangeListener extends Object{
    onChange<T extends Object | number | string | boolean>(arg0: T, arg1: T): void;
}