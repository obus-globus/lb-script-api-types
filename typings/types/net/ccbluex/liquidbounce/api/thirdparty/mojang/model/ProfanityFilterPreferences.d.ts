import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ProfanityFilterPreferences extends Record {
    constructor(profanityFilterOn: boolean)
    // private profanityFilterOn: boolean;
    /*not mapped: */ profanityFilterOn(): boolean;
    component1(): boolean;
    copy(profanityFilterOn: boolean): ProfanityFilterPreferences;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}