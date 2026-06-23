import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StructureTemplatePool$Projection;
    static values(): (Object | null)[];
    private constructor(name: string, processors: StructureProcessor[])
    readonly processors: StructureProcessor[];
    getName(): string;
    getProcessors(): StructureProcessor[];
    getSerializedName(): string;
    name(): "TERRAIN_MATCHING" | "RIGID";
}