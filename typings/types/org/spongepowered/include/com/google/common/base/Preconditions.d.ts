import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Preconditions extends Object {
    static checkArgument(paramarg0: boolean): void;
    static checkArgument(paramarg0: boolean, paramarg1: Object): void;
    static checkArgument(paramarg0: boolean, paramarg1: string, paramarg2: number): void;
    static checkArgument(paramarg0: boolean, paramarg1: string, paramarg2: Object): void;
    static checkElementIndex(paramarg0: number, paramarg1: number): number;
    static checkElementIndex(paramarg0: number, paramarg1: number, paramarg2: string): number;
    static checkNotNull<T extends unknown>(paramarg0: T): T;
    static checkNotNull<T extends unknown>(paramarg0: T, paramarg1: Object): T;
    static checkPositionIndex(paramarg0: number, paramarg1: number): number;
    static checkPositionIndex(paramarg0: number, paramarg1: number, paramarg2: string): number;
    static checkPositionIndexes(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static checkState(paramarg0: boolean): void;
    static checkState(paramarg0: boolean, paramarg1: Object): void;
}