import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { ScoreboardNameProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/score/ScoreboardNameProvider.d.ts'
import type { ScoreHolder } from '../../../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ContextScoreboardNameProvider extends Record implements ScoreboardNameProvider {
    static INLINE_CODEC: Codec<ContextScoreboardNameProvider>;
    static MAP_CODEC: MapCodec<ContextScoreboardNameProvider>;
    static forTarget(paramtarget: LootContext$EntityTarget): ScoreboardNameProvider;
    constructor(target: LootContext$EntityTarget)
    // private target: LootContext$EntityTarget;
    codec(): MapCodec<ContextScoreboardNameProvider>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    getScoreHolder(context: LootContext): ScoreHolder;
    hashCode(): number;
    target(): LootContext$EntityTarget;
    toString(): string;
}