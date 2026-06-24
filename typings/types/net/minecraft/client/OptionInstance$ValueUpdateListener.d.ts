import type { Object } from '../../../java/lang/Object.d.ts'
export interface OptionInstance$ValueUpdateListener<T extends unknown> extends Object{
    valueChanged(newValue: T): void;
}