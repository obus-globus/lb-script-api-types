import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FileAttribute<T extends unknown> extends Object{
    name(): string;
    value(): T;
}