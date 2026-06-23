import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ChangeListener extends Object{
    onChange<T extends unknown>(arg0: T, arg1: T): void;
}