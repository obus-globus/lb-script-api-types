import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Warden } from '../../../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class Roar extends Behavior<Warden> {
    static DEFAULT_DURATION: number;
    constructor()
    canStillUse(level: ServerLevel, body: Warden, timestamp: number): boolean;
    start(level: ServerLevel, body: Warden, timestamp: number): void;
    stop(level: ServerLevel, body: Warden, timestamp: number): void;
    tick(level: ServerLevel, body: Warden, timestamp: number): void;
}