import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class TestEnvironmentDefinition$Weather$Type extends Enum<TestEnvironmentDefinition$Weather$Type> implements StringRepresentable {
    static CLEAR: TestEnvironmentDefinition$Weather$Type;
    static CODEC: Codec<TestEnvironmentDefinition$Weather$Type>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RAIN: TestEnvironmentDefinition$Weather$Type;
    static THUNDER: TestEnvironmentDefinition$Weather$Type;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TestEnvironmentDefinition$Weather$Type;
    static values(): (Object | null)[];
    private constructor(id: string, clearTime: number, rainTime: number, raining: boolean, thundering: boolean)
    // private clearTime: number;
    // private id: string;
    // private rainTime: number;
    // private raining: boolean;
    // private thundering: boolean;
    apply(level: ServerLevel): void;
    getSerializedName(): string;
    name(): "CLEAR" | "RAIN" | "THUNDER";
}