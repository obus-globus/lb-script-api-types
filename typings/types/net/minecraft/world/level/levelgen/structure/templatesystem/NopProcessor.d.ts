import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureProcessorType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorType.d.ts'
export class NopProcessor extends StructureProcessor {
    static CODEC: MapCodec<NopProcessor>;
    static INSTANCE: NopProcessor;
    private constructor()
    getType(): StructureProcessorType<Object>;
}