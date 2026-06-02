import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MojangApi$UsernameRecord extends Object {
    constructor(name: string, changedToAt: number | null)
    readonly changedToAt: number | null;
    readonly name: string;
    component1(): string;
    component2(): number | null;
    copy(name: string, changedToAt: number | null): MojangApi$UsernameRecord;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}