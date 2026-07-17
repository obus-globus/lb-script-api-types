import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DisplaySlot } from '../../../../net/minecraft/world/scores/DisplaySlot.d.ts'
import type { Objective$Packed } from '../../../../net/minecraft/world/scores/Objective$Packed.d.ts'
import type { PlayerTeam$Packed } from '../../../../net/minecraft/world/scores/PlayerTeam$Packed.d.ts'
import type { Scoreboard$PackedScore } from '../../../../net/minecraft/world/scores/Scoreboard$PackedScore.d.ts'
export class ScoreboardSaveData$Packed extends Record {
    static CODEC: Codec<ScoreboardSaveData$Packed>;
    static EMPTY: ScoreboardSaveData$Packed;
    constructor(objectives: Objective$Packed[], scores: Scoreboard$PackedScore[], displaySlots: JavaMap<DisplaySlot, string>, teams: PlayerTeam$Packed[])
    // private displaySlots: JavaMap<DisplaySlot, string>;
    // private objectives: Objective$Packed[];
    // private scores: Scoreboard$PackedScore[];
    // private teams: PlayerTeam$Packed[];
    displaySlots(): JavaMap<DisplaySlot, string>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    objectives(): Objective$Packed[];
    scores(): Scoreboard$PackedScore[];
    teams(): PlayerTeam$Packed[];
    toString(): string;
}