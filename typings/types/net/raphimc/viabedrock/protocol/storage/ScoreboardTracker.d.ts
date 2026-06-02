import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Pair } from '../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScoreboardEntry } from '../../../../../net/raphimc/viabedrock/api/model/scoreboard/ScoreboardEntry.d.ts'
import type { ScoreboardObjective } from '../../../../../net/raphimc/viabedrock/api/model/scoreboard/ScoreboardObjective.d.ts'
export class ScoreboardTracker extends Object implements StorableObject {
    constructor()
    // private objectives: { [key: string]: ScoreboardObjective };
    addObjective(arg0: string, arg1: ScoreboardObjective): void;
    getEntry(arg0: number): Pair<ScoreboardObjective, ScoreboardEntry>;
    getEntryForPlayer(arg0: number): Pair<ScoreboardObjective, ScoreboardEntry>;
    getObjective(arg0: string): ScoreboardObjective;
    hasObjective(arg0: string): boolean;
    onRemove(): void;
    removeObjective(arg0: string): void;
}