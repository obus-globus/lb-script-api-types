import type { Object } from '../../../java/lang/Object.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
import type { MinecraftServer } from '../../../net/minecraft/server/MinecraftServer.d.ts'
import type { DisplaySlot } from '../../../net/minecraft/world/scores/DisplaySlot.d.ts'
import type { Objective } from '../../../net/minecraft/world/scores/Objective.d.ts'
import type { PlayerTeam } from '../../../net/minecraft/world/scores/PlayerTeam.d.ts'
import type { Score } from '../../../net/minecraft/world/scores/Score.d.ts'
import type { ScoreHolder } from '../../../net/minecraft/world/scores/ScoreHolder.d.ts'
import type { Scoreboard } from '../../../net/minecraft/world/scores/Scoreboard.d.ts'
import type { ScoreboardSaveData } from '../../../net/minecraft/world/scores/ScoreboardSaveData.d.ts'
import type { ScoreboardSaveData$Packed } from '../../../net/minecraft/world/scores/ScoreboardSaveData$Packed.d.ts'
export class ServerScoreboard extends Scoreboard {
    static HIDDEN_SCORE_PREFIX: string;
    constructor(server: MinecraftServer)
    // private dirty: boolean;
    // private server: MinecraftServer;
    // private trackedObjectives: Objective[];
    addPlayerToTeam(player: string, team: PlayerTeam): boolean;
    getObjectiveDisplaySlotCount(objective: Objective): number;
    getStartTrackingPackets(objective: Objective): Packet<Object>[];
    getStopTrackingPackets(objective: Objective): Packet<Object>[];
    load(data: ScoreboardSaveData$Packed): void;
    onObjectiveAdded(objective: Objective): void;
    onObjectiveChanged(objective: Objective): void;
    onObjectiveRemoved(objective: Objective): void;
    onPlayerRemoved(player: ScoreHolder): void;
    onPlayerScoreRemoved(player: ScoreHolder, objective: Objective): void;
    onScoreChanged(owner: ScoreHolder, objective: Objective, score: Score): void;
    onScoreLockChanged(owner: ScoreHolder, objective: Objective): void;
    onTeamAdded(team: PlayerTeam): void;
    onTeamChanged(team: PlayerTeam): void;
    onTeamRemoved(team: PlayerTeam): void;
    removePlayerFromTeam(player: string): boolean;
    removePlayerFromTeam(player: string, team: PlayerTeam): void;
    setDirty(): void;
    setDisplayObjective(slot: DisplaySlot, objective: Objective): void;
    startTrackingObjective(objective: Objective): void;
    stopTrackingObjective(objective: Objective): void;
    // private store(): ScoreboardSaveData$Packed;
    storeToSaveDataIfDirty(saveData: ScoreboardSaveData): void;
    // private updatePlayerWaypoint(player: string): void;
    // private updateTeamWaypoints(team: PlayerTeam): void;
}