import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
export class TestData<EnvironmentType extends unknown> extends Record {
    static CODEC: MapCodec<TestData<Holder<TestEnvironmentDefinition<Object>>>>;
    // private environment: EnvironmentType;
    // private manualOnly: boolean;
    // private maxAttempts: number;
    // private maxTicks: number;
    // private padding: number;
    // private required: boolean;
    // private requiredSuccesses: number;
    // private rotation: Rotation;
    // private setupTicks: number;
    // private skyAccess: boolean;
    // private structure: Identifier;
    environment(): EnvironmentType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    manualOnly(): boolean;
    map<T extends unknown>(mapper: (param0: EnvironmentType) => T): TestData<T>;
    maxAttempts(): number;
    maxTicks(): number;
    padding(): number;
    required(): boolean;
    requiredSuccesses(): number;
    rotation(): Rotation;
    setupTicks(): number;
    skyAccess(): boolean;
    structure(): Identifier;
    toString(): string;
}