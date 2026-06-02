import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Objective } from '../../../../net/minecraft/world/scores/Objective.d.ts'
import type { Score } from '../../../../net/minecraft/world/scores/Score.d.ts'
export class PlayerScores extends Object {
    constructor()
    // private scores: Map<Objective, Score>;
    get(objective: Objective): Score;
    getOrCreate(objective: Objective, newResultCallback: (param0: Score) => void): Score;
    hasScores(): boolean;
    listRawScores(): Map<Objective, Score>;
    listScores(): Object2IntMap<Objective>;
    remove(objective: Objective): boolean;
    setScore(objective: Objective, score: Score): void;
}