import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
export class StructureTemplatePool$Projection extends Enum<StructureTemplatePool$Projection> implements StringRepresentable {
    static CODEC: StringRepresentable$EnumCodec<StructureTemplatePool$Projection>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGID: StructureTemplatePool$Projection;
    static TERRAIN_MATCHING: StructureTemplatePool$Projection;
    static byName(paramname: string): StructureTemplatePool$Projection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StructureTemplatePool$Projection;
    static values(): StructureTemplatePool$Projection[];
    private constructor(name: string, processors: StructureProcessor[])
    readonly processors: StructureProcessor[];
    getName(): string;
    getProcessors(): StructureProcessor[];
    getSerializedName(): string;
    name(): "TERRAIN_MATCHING" | "RIGID";
}