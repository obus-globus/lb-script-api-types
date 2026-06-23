import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Builder<T extends unknown> extends Object{
    build(): T;
    getErrorPrefix(): string;
    isValid(): boolean;
}