import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { DimensionType } from '../../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
export class CommonPlayerSpawnInfo extends Record {
    // private dimension: ResourceKey<Level>;
    // private dimensionType: Holder<DimensionType>;
    // private gameType: GameType;
    // private isDebug: boolean;
    // private isFlat: boolean;
    // private lastDeathLocation: Optional<GlobalPos>;
    // private portalCooldown: number;
    // private previousGameType: GameType;
    // private seaLevel: number;
    // private seed: number;
    dimension(): ResourceKey<Level>;
    dimensionType(): Holder<DimensionType>;
    equals(o: Object | null): boolean;
    gameType(): GameType;
    hashCode(): number;
    isDebug(): boolean;
    isFlat(): boolean;
    lastDeathLocation(): Optional<GlobalPos>;
    portalCooldown(): number;
    previousGameType(): GameType;
    seaLevel(): number;
    seed(): number;
    toString(): string;
    write(output: RegistryFriendlyByteBuf): void;
}