import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class TestEnvironmentDefinition$Weather$Type extends Enum<TestEnvironmentDefinition$Weather$Type> implements StringRepresentable {
    static CLEAR: TestEnvironmentDefinition$Weather$Type;
    static CODEC: Codec<TestEnvironmentDefinition$Weather$Type>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RAIN: TestEnvironmentDefinition$Weather$Type;
    static THUNDER: TestEnvironmentDefinition$Weather$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TestEnvironmentDefinition$Weather$Type;
    static values(): TestEnvironmentDefinition$Weather$Type[];
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