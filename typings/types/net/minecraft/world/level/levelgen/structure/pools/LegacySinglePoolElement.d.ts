import type { Either } from '../../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { EmptyPoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/EmptyPoolElement.d.ts'
import type { FeaturePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/FeaturePoolElement.d.ts'
import type { ListPoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/ListPoolElement.d.ts'
import type { SinglePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/SinglePoolElement.d.ts'
import type { StructurePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElement.d.ts'
import type { StructurePoolElementType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElementType.d.ts'
import type { StructureTemplatePool$Projection } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool$Projection.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureProcessorList } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorList.d.ts'
import type { StructureTemplate } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
export class LegacySinglePoolElement extends SinglePoolElement {
    static CODEC: Codec<StructurePoolElement>;
    static CODEC: MapCodec<LegacySinglePoolElement>;
    static CODEC: MapCodec<SinglePoolElement>;
    static empty(): (param0: StructureTemplatePool$Projection) => EmptyPoolElement;
    static feature(paramfeature: Holder<PlacedFeature>): (param0: StructureTemplatePool$Projection) => FeaturePoolElement;
    static legacy(paramlocation: string): (param0: StructureTemplatePool$Projection) => LegacySinglePoolElement;
    static legacy(paramlocation: string, paramprocessors: Holder<StructureProcessorList>): (param0: StructureTemplatePool$Projection) => LegacySinglePoolElement;
    static list(paramelements: (Object | null)[]): (param0: StructureTemplatePool$Projection) => ListPoolElement;
    static single(paramlocation: string): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramprocessors: Holder<StructureProcessorList>): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramprocessors: Holder<StructureProcessorList>, paramoverrideLiquidSettings: LiquidSettings): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramoverrideLiquidSettings: LiquidSettings): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    constructor(template: Either<Identifier, StructureTemplate>, processors: Holder<StructureProcessorList>, projection: StructureTemplatePool$Projection, liquidSettings: Optional<LiquidSettings>)
    getSettings(rotation: Rotation, chunkBB: BoundingBox, liquidSettings: LiquidSettings, keepJigsaws: boolean): StructurePlaceSettings;
    getType(): StructurePoolElementType<Object>;
    toString(): string;
}