import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { ValidationContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
import type { ScoreboardNameProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/score/ScoreboardNameProvider.d.ts'
export class ScoreboardValue extends Record implements NumberProvider {
    static MAP_CODEC: MapCodec<ScoreboardValue>;
    static fromScoreboard(paramentityTarget: LootContext$EntityTarget, paramscore: string): ScoreboardValue;
    static fromScoreboard(paramentityTarget: LootContext$EntityTarget, paramscore: string, paramscale: number): ScoreboardValue;
    // private scale: number;
    // private score: string;
    // private target: ScoreboardNameProvider;
    codec(): MapCodec<ScoreboardValue>;
    equals(o: Object | null): boolean;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    hashCode(): number;
    scale(): number;
    score(): string;
    target(): ScoreboardNameProvider;
    toString(): string;
    validate(context: ValidationContext): void;
}