import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScoreboardEntry } from '../../../../../../net/raphimc/viabedrock/api/model/scoreboard/ScoreboardEntry.d.ts'
import type { ObjectiveSortOrder } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ObjectiveSortOrder.d.ts'
export class ScoreboardObjective extends Object {
    constructor(arg0: string, arg1: ObjectiveSortOrder)
    // private entries: Long2ObjectMap<ScoreboardEntry>;
    // private name: string;
    // private sortOrder: ObjectiveSortOrder;
    addEntry(arg0: UserConnection, arg1: number, arg2: ScoreboardEntry): void;
    getEntry(arg0: number): ScoreboardEntry;
    getEntryForPlayer(arg0: number): ScoreboardEntry;
    getEntryWithSameTarget(arg0: ScoreboardEntry): ScoreboardEntry;
    removeEntry(arg0: UserConnection, arg1: number): void;
    // private removeEntry0(arg0: UserConnection, arg1: ScoreboardEntry): void;
    updateEntry(arg0: UserConnection, arg1: ScoreboardEntry): void;
    // private updateEntry0(arg0: UserConnection, arg1: ScoreboardEntry): void;
    updateEntryInPlace(arg0: UserConnection, arg1: ScoreboardEntry): void;
}