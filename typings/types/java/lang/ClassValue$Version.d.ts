import type { ClassValue } from '../../java/lang/ClassValue.d.ts'
import type { Record } from '../../java/lang/Record.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ClassValue$Version<T extends unknown> extends Record {
    constructor(classValue: ClassValue<T>)
    // private classValue: ClassValue<T>;
    classValue(): ClassValue<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isLive(): boolean;
    toString(): string;
}