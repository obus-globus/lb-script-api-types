import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FishingHookPredicate } from '../../../../net/minecraft/advancements/criterion/FishingHookPredicate.d.ts'
import type { LightningBoltPredicate } from '../../../../net/minecraft/advancements/criterion/LightningBoltPredicate.d.ts'
import type { PlayerPredicate } from '../../../../net/minecraft/advancements/criterion/PlayerPredicate.d.ts'
import type { RaiderPredicate } from '../../../../net/minecraft/advancements/criterion/RaiderPredicate.d.ts'
import type { SheepPredicate } from '../../../../net/minecraft/advancements/criterion/SheepPredicate.d.ts'
import type { SlimePredicate } from '../../../../net/minecraft/advancements/criterion/SlimePredicate.d.ts'
export class EntitySubPredicates extends Object {
    static FISHING_HOOK: MapCodec<FishingHookPredicate>;
    static LIGHTNING: MapCodec<LightningBoltPredicate>;
    static PLAYER: MapCodec<PlayerPredicate>;
    static RAIDER: MapCodec<RaiderPredicate>;
    static SHEEP: MapCodec<SheepPredicate>;
    static SLIME: MapCodec<SlimePredicate>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor()
}