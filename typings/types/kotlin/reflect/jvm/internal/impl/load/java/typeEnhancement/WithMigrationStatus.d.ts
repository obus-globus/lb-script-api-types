import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
export class WithMigrationStatus<T extends unknown> extends Object {
    constructor(arg0: T, arg1: boolean)
    constructor(arg0: Object, arg1: boolean, arg2: number, arg3: DefaultConstructorMarker)
    // private isForWarningOnly: boolean;
    readonly qualifier: T;
    copy(arg0: T, arg1: boolean): WithMigrationStatus<T>;
    equals(arg0: Object | null): boolean;
    getQualifier(): T;
    hashCode(): number;
    isForWarningOnly(): boolean;
    toString(): string;
}