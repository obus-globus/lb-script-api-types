import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MappingFlag extends Enum<MappingFlag> {
    static NEEDS_DST_FIELD_DESC: MappingFlag;
    static NEEDS_DST_METHOD_DESC: MappingFlag;
    static NEEDS_ELEMENT_UNIQUENESS: MappingFlag;
    static NEEDS_HEADER_METADATA: MappingFlag;
    static NEEDS_METADATA_UNIQUENESS: MappingFlag;
    static NEEDS_MULTIPLE_PASSES: MappingFlag;
    static NEEDS_SRC_FIELD_DESC: MappingFlag;
    static NEEDS_SRC_METHOD_DESC: MappingFlag;
    static NONE: MappingFlag[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MappingFlag;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEEDS_MULTIPLE_PASSES" | "NEEDS_HEADER_METADATA" | "NEEDS_METADATA_UNIQUENESS" | "NEEDS_ELEMENT_UNIQUENESS" | "NEEDS_SRC_FIELD_DESC" | "NEEDS_SRC_METHOD_DESC" | "NEEDS_DST_FIELD_DESC" | "NEEDS_DST_METHOD_DESC";
}