import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { AcknowledgedMessagesStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/AcknowledgedMessagesStorage.d.ts'
import type { ArmorTrimStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/ArmorTrimStorage.d.ts'
import type { BannerPatternStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/BannerPatternStorage.d.ts'
import type { ScoreboardTeamStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/ScoreboardTeamStorage.d.ts'
import type { TagKeys } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/TagKeys.d.ts'
export class ProtocolStorables1_20_5 extends ProtocolStorablesBase {
    constructor()
    // private armorTrims: ArmorTrimStorage;
    acknowledgedMessages(): AcknowledgedMessagesStorage;
    armorTrims(): ArmorTrimStorage;
    bannerPatterns(): BannerPatternStorage;
    scoreboardTeams(): ScoreboardTeamStorage;
    setAcknowledgedMessages(arg0: AcknowledgedMessagesStorage): void;
    setBannerPatterns(arg0: BannerPatternStorage): void;
    setScoreboardTeams(arg0: ScoreboardTeamStorage): void;
    setTagKeys(arg0: TagKeys): void;
    tagKeys(): TagKeys;
}