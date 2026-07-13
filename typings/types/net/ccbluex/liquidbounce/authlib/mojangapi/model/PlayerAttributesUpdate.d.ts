import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendsPreferences } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendsPreferences.d.ts'
import type { ProfanityFilterPreferences } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ProfanityFilterPreferences.d.ts'
export class PlayerAttributesUpdate extends Record {
    constructor(profanityFilterPreferences: ProfanityFilterPreferences | null, friendsPreferences: FriendsPreferences | null)
    // private friendsPreferences: FriendsPreferences | null;
    /*not mapped: */ friendsPreferences(): FriendsPreferences | null;
    // private profanityFilterPreferences: ProfanityFilterPreferences | null;
    /*not mapped: */ profanityFilterPreferences(): ProfanityFilterPreferences | null;
    component1(): ProfanityFilterPreferences | null;
    component2(): FriendsPreferences | null;
    copy(profanityFilterPreferences: ProfanityFilterPreferences | null, friendsPreferences: FriendsPreferences | null): PlayerAttributesUpdate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}