import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
export interface StructureProcessorType<P extends StructureProcessor> extends Object{
    codec(): MapCodec<P>;
}