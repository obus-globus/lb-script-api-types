import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FileAttribute<T extends Object | number | string | boolean> extends Object{
    name(): string;
    value(): T;
}