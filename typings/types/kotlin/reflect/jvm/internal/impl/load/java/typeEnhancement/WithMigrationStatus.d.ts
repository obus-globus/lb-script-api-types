import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class WithMigrationStatus<T extends unknown> extends Object {
    constructor(arg0: T, arg1: boolean)
    // private isForWarningOnly: boolean;
    readonly qualifier: T;
    copy(arg0: T, arg1: boolean): WithMigrationStatus<T>;
    equals(arg0: Object | null): boolean;
    getQualifier(): T;
    hashCode(): number;
    isForWarningOnly(): boolean;
    toString(): string;
}