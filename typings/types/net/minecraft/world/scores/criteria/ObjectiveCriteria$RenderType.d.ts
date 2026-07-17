import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class ObjectiveCriteria$RenderType extends Enum<ObjectiveCriteria$RenderType> implements StringRepresentable {
    static CODEC: StringRepresentable$EnumCodec<ObjectiveCriteria$RenderType>;
    static HEARTS: ObjectiveCriteria$RenderType;
    static INTEGER: ObjectiveCriteria$RenderType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static byId(paramkey: string): ObjectiveCriteria$RenderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ObjectiveCriteria$RenderType;
    static values(): ObjectiveCriteria$RenderType[];
    private constructor(id: string)
    readonly id: string;
    getId(): string;
    getSerializedName(): string;
    name(): "INTEGER" | "HEARTS";
}