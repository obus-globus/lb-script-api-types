import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TogglePreference extends Record {
    constructor(enabled: boolean)
    // private enabled: boolean;
    /*not mapped: */ enabled(): boolean;
    component1(): boolean;
    copy(enabled: boolean): TogglePreference;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}