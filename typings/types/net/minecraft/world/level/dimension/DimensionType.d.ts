import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DimensionTypeAccessor } from '../../../../../net/fabricmc/fabric/mixin/dimension/DimensionTypeAccessor.d.ts'
import type { DimensionTypeAccessor as DimensionTypeAccessor_2 } from '../../../../../net/irisshaders/iris/mixin/DimensionTypeAccessor.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { IntProvider } from '../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { EnvironmentAttributeMap } from '../../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { WorldClock } from '../../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { CardinalLighting$Type } from '../../../../../net/minecraft/world/level/CardinalLighting$Type.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { DimensionType$MonsterSettings } from '../../../../../net/minecraft/world/level/dimension/DimensionType$MonsterSettings.d.ts'
import type { DimensionType$Skybox } from '../../../../../net/minecraft/world/level/dimension/DimensionType$Skybox.d.ts'
import type { Timeline } from '../../../../../net/minecraft/world/timeline/Timeline.d.ts'
export class DimensionType extends Record implements DimensionTypeAccessor, DimensionTypeAccessor_2 {
    static BITS_FOR_Y: number;
    static CODEC: Codec<Holder<DimensionType>>;
    static DIRECT_CODEC: Codec<DimensionType>;
    static MAX_Y: number;
    static MIN_HEIGHT: number;
    static MIN_Y: number;
    static MOON_BRIGHTNESS_PER_PHASE: number[];
    static NETWORK_CODEC: Codec<DimensionType>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<DimensionType>>;
    static WAY_ABOVE_MAX_Y: number;
    static WAY_BELOW_MIN_Y: number;
    static Y_SIZE: number;
    static getStorageFolder(paramname: ResourceKey<Level>, parambaseFolder: Path[][]): Path[][];
    static getTeleportationScale(paramlastDimensionType: DimensionType, paramnewDimensionType: DimensionType): number;
    constructor(hasFixedTime: boolean, hasSkyLight: boolean, hasCeiling: boolean, hasEnderDragonFight: boolean, coordinateScale: number, minY: number, height: number, logicalHeight: number, infiniburn: Holder<Block>[], ambientLight: number, monsterSettings: DimensionType$MonsterSettings, skybox: DimensionType$Skybox, cardinalLightType: CardinalLighting$Type, attributes: EnvironmentAttributeMap, timelines: Holder<Timeline>[], defaultClock: Optional<Holder<WorldClock>>)
    // private attributes: EnvironmentAttributeMap;
    // private cardinalLightType: CardinalLighting$Type;
    // private coordinateScale: number;
    // private defaultClock: Optional<Holder<WorldClock>>;
    // private hasCeiling: boolean;
    // private hasEnderDragonFight: boolean;
    // private hasFixedTime: boolean;
    // private hasSkyLight: boolean;
    // private height: number;
    // private infiniburn: Holder<Block>[];
    // private logicalHeight: number;
    // private minY: number;
    // private monsterSettings: DimensionType$MonsterSettings;
    // private skybox: DimensionType$Skybox;
    // private timelines: Holder<Timeline>[];
    ambientLight(): number;
    attributes(): EnvironmentAttributeMap;
    cardinalLightType(): CardinalLighting$Type;
    coordinateScale(): number;
    defaultClock(): Optional<Holder<WorldClock>>;
    equals(o: Object | null): boolean;
    fabric_setAttributes(arg0: EnvironmentAttributeMap): void;
    getAmbientLight(): number;
    hasCeiling(): boolean;
    hasEndFlashes(): boolean;
    hasEnderDragonFight(): boolean;
    hasFixedTime(): boolean;
    hasSkyLight(): boolean;
    hashCode(): number;
    height(): number;
    infiniburn(): Holder<Block>[];
    logicalHeight(): number;
    minY(): number;
    monsterSettings(): DimensionType$MonsterSettings;
    monsterSpawnBlockLightLimit(): number;
    monsterSpawnLightTest(): IntProvider;
    skybox(): DimensionType$Skybox;
    timelines(): Holder<Timeline>[];
    toString(): string;
}