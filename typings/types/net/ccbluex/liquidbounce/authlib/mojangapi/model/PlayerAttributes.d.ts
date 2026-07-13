import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BanStatus } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/BanStatus.d.ts'
import type { ChatPreferences } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ChatPreferences.d.ts'
import type { FriendsPreferences } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendsPreferences.d.ts'
import type { Privileges } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/Privileges.d.ts'
import type { ProfanityFilterPreferences } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ProfanityFilterPreferences.d.ts'
export class PlayerAttributes extends Record {
    constructor(privileges: Privileges, profanityFilterPreferences: ProfanityFilterPreferences, friendsPreferences: FriendsPreferences | null, chatPreferences: ChatPreferences | null, banStatus: BanStatus)
    // private banStatus: BanStatus;
    /*not mapped: */ banStatus(): BanStatus;
    // private chatPreferences: ChatPreferences | null;
    /*not mapped: */ chatPreferences(): ChatPreferences | null;
    // private friendsPreferences: FriendsPreferences | null;
    /*not mapped: */ friendsPreferences(): FriendsPreferences | null;
    // private privileges: Privileges;
    /*not mapped: */ privileges(): Privileges;
    // private profanityFilterPreferences: ProfanityFilterPreferences;
    /*not mapped: */ profanityFilterPreferences(): ProfanityFilterPreferences;
    component1(): Privileges;
    component2(): ProfanityFilterPreferences;
    component3(): FriendsPreferences | null;
    component4(): ChatPreferences | null;
    component5(): BanStatus;
    copy(privileges: Privileges, profanityFilterPreferences: ProfanityFilterPreferences, friendsPreferences: FriendsPreferences | null, chatPreferences: ChatPreferences | null, banStatus: BanStatus): PlayerAttributes;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}