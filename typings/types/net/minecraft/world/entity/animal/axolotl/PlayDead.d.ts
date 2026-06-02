import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Axolotl } from '../../../../../../net/minecraft/world/entity/animal/axolotl/Axolotl.d.ts'
export class PlayDead extends Behavior<Axolotl> {
    static DEFAULT_DURATION: number;
    constructor()
    canStillUse(level: ServerLevel, body: Axolotl, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Axolotl): boolean;
    start(level: ServerLevel, body: Axolotl, timestamp: number): void;
}