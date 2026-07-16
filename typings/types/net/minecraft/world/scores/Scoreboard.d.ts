import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { DisplaySlot } from '../../../../net/minecraft/world/scores/DisplaySlot.d.ts'
import type { Objective } from '../../../../net/minecraft/world/scores/Objective.d.ts'
import type { Objective$Packed } from '../../../../net/minecraft/world/scores/Objective$Packed.d.ts'
import type { PlayerScoreEntry } from '../../../../net/minecraft/world/scores/PlayerScoreEntry.d.ts'
import type { PlayerScores } from '../../../../net/minecraft/world/scores/PlayerScores.d.ts'
import type { PlayerTeam } from '../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
import type { PlayerTeam$Packed } from '../../../../net/minecraft/world/scores/PlayerTeam$Packed.d.ts'
import type { ReadOnlyScoreInfo } from '../../../../net/minecraft/world/scores/ReadOnlyScoreInfo.d.ts'
import type { Score } from '../../../../net/minecraft/world/scores/Score.d.ts'
import type { ScoreAccess } from '../../../../net/minecraft/world/scores/ScoreAccess.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
import type { Scoreboard$PackedScore } from '../../../../net/minecraft/world/scores/Scoreboard$PackedScore.d.ts'
import type { ObjectiveCriteria } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria.d.ts'
import type { ObjectiveCriteria$RenderType } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria$RenderType.d.ts'
export class Scoreboard extends Object {
    static HIDDEN_SCORE_PREFIX: string;
    constructor()
    // private displayObjectives: Map<DisplaySlot, Objective>;
    // private objectivesByCriteria: Map<ObjectiveCriteria, Objective[]>;
    // private objectivesByName: { [key: string]: Objective };
    // private playerScores: { [key: string]: PlayerScores };
    // private teamsByName: { [key: string]: PlayerTeam };
    // private teamsByPlayer: { [key: string]: PlayerTeam };
    addObjective(name: string, criteria: ObjectiveCriteria, displayName: Component, renderType: ObjectiveCriteria$RenderType, displayAutoUpdate: boolean, numberFormat: NumberFormat): Objective;
    addPlayerTeam(name: string): PlayerTeam;
    addPlayerToTeam(player: string, team: PlayerTeam): boolean;
    entityRemoved(entity: Entity): void;
    forAllObjectives(criteria: ObjectiveCriteria, name: ScoreHolder, operation: (param0: ScoreAccess) => void): void;
    getDisplayObjective(slot: DisplaySlot): Objective;
    getObjective(name: string): Objective;
    getObjectiveNames(): string[];
    getObjectives(): Objective[];
    // private getOrCreatePlayerInfo(name: string): PlayerScores;
    getOrCreatePlayerScore(holder: ScoreHolder, objective: Objective): ScoreAccess;
    getOrCreatePlayerScore(scoreHolder: ScoreHolder, objective: Objective, forceWritable: boolean): ScoreAccess;
    getPlayerScoreInfo(name: ScoreHolder, objective: Objective): ReadOnlyScoreInfo;
    getPlayerTeam(name: string): PlayerTeam;
    getPlayerTeams(): PlayerTeam[];
    getPlayersTeam(name: string): PlayerTeam;
    getTeamNames(): string[];
    getTrackedPlayers(): ScoreHolder[];
    listPlayerScores(objective: Objective): PlayerScoreEntry[];
    listPlayerScores(player: ScoreHolder): { [key: string]: any };
    loadObjective(objective: Objective$Packed): void;
    loadPlayerScore(score: Scoreboard$PackedScore): void;
    loadPlayerTeam(packed: PlayerTeam$Packed): void;
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
    packDisplaySlots(): Map<DisplaySlot, string>;
    packObjectives(): Objective$Packed[];
    packPlayerScores(): Scoreboard$PackedScore[];
    packPlayerTeams(): PlayerTeam$Packed[];
    removeObjective(objective: Objective): void;
    removePlayerFromTeam(player: string): boolean;
    removePlayerFromTeam(player: string, team: PlayerTeam): void;
    removePlayerTeam(team: PlayerTeam): void;
    resetAllPlayerScores(player: ScoreHolder): void;
    resetSinglePlayerScore(player: ScoreHolder, objective: Objective): void;
    setDisplayObjective(slot: DisplaySlot, objective: Objective): void;
}