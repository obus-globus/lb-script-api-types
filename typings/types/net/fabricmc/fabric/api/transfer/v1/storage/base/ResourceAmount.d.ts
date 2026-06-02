import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ResourceAmount<T extends Object | number | string | boolean> extends Record {
    // private amount: number;
    // private resource: T;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    resource(): T;
    toString(): string;
}