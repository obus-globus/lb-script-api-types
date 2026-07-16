import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RecordCodecBuilder } from '../../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { RecordCodecBuilder$Instance } from '../../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Instance.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { WeightedList } from '../../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
import type { Structure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { Structure$GenerationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationContext.d.ts'
import type { Structure$GenerationStub } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationStub.d.ts'
import type { Structure$StructureSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$StructureSettings.d.ts'
import type { StructureType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructureType.d.ts'
export class NetherFortressStructure extends Structure {
    static CODEC: MapCodec<NetherFortressStructure>;
    static DIRECT_CODEC: Codec<Structure>;
    static FORTRESS_ENEMIES: WeightedList<MobSpawnSettings$SpawnerData>;
    static getMeanFirstOccupiedHeight(paramcontext: Structure$GenerationContext, paramminX: number, paramsizeX: number, paramminZ: number, paramsizeZ: number): number;
    static settingsCodec<S extends Structure>(parami: RecordCodecBuilder$Instance<S>): RecordCodecBuilder<S, Structure$StructureSettings>;
    static simpleCodec<S extends Structure>(paramconstructor: (param0: Structure$StructureSettings) => S): MapCodec<S>;
    constructor(settings: Structure$StructureSettings)
    findGenerationPoint(context: Structure$GenerationContext): Optional<Structure$GenerationStub>;
    type(): StructureType<any>;
}