import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { BedRule$Rule } from '../../../../net/minecraft/world/attribute/BedRule$Rule.d.ts'
import type { Player$BedSleepingProblem } from '../../../../net/minecraft/world/entity/player/Player$BedSleepingProblem.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class BedRule extends Record {
    static CAN_SLEEP_WHEN_DARK: BedRule;
    static CODEC: Codec<BedRule>;
    static EXPLODES: BedRule;
    // private canSetSpawn: BedRule$Rule;
    // private canSleep: BedRule$Rule;
    // private errorMessage: Optional<Component>;
    // private explodes: boolean;
    asProblem(): Player$BedSleepingProblem;
    canSetSpawn(): BedRule$Rule;
    canSetSpawn(level: Level): boolean;
    canSleep(): BedRule$Rule;
    canSleep(level: Level): boolean;
    equals(o: Object | null): boolean;
    errorMessage(): Optional<Component>;
    explodes(): boolean;
    hashCode(): number;
    toString(): string;
}