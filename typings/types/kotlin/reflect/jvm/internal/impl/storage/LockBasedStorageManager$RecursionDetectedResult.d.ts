import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LockBasedStorageManager$RecursionDetectedResult<T extends Object | number | string | boolean> extends Object {
    static fallThrough(): LockBasedStorageManager$RecursionDetectedResult<Object>;
    static value(paramarg0: Object | null): LockBasedStorageManager$RecursionDetectedResult<Object>;
    private constructor(arg0: T, arg1: boolean)
    readonly fallThrough: boolean;
    readonly value: T;
    getValue(): T;
    isFallThrough(): boolean;
    toString(): string;
}