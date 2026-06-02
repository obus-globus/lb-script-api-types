import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Sniffer } from '../../../../../../net/minecraft/world/entity/animal/sniffer/Sniffer.d.ts'
export class SnifferAi$Sniffing extends Behavior<Sniffer> {
    static DEFAULT_DURATION: number;
    private constructor(min: number, max: number)
    canStillUse(level: ServerLevel, body: Sniffer, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Sniffer): boolean;
    start(level: ServerLevel, sniffer: Sniffer, timestamp: number): void;
    stop(level: ServerLevel, sniffer: Sniffer, timestamp: number): void;
}