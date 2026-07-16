import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LockBasedStorageManager$RecursionDetectedResult<T extends unknown> extends Object {
    static fallThrough<T extends unknown>(): LockBasedStorageManager$RecursionDetectedResult<T>;
    static value<T extends unknown>(paramarg0: T): LockBasedStorageManager$RecursionDetectedResult<T>;
    private constructor(arg0: T, arg1: boolean)
    readonly fallThrough: boolean;
    readonly value: T;
    getValue(): T;
    isFallThrough(): boolean;
    toString(): string;
}