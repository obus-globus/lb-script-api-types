import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ResourceAmount<T extends unknown> extends Record {
    constructor(resource: T, amount: number)
    // private amount: number;
    // private resource: T;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    resource(): T;
    toString(): string;
}