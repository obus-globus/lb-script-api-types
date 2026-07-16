import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { EnvironmentAttributeSystem } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem.d.ts'
import type { Timeline } from '../../../../net/minecraft/world/timeline/Timeline.d.ts'
export class TestEnvironmentDefinition$Timelines extends Record implements TestEnvironmentDefinition<EnvironmentAttributeSystem> {
    static CODEC: MapCodec<TestEnvironmentDefinition$Timelines>;
    static DIRECT_CODEC: Codec<TestEnvironmentDefinition<Object>>;
    static activate(paramenvironment: TestEnvironmentDefinition<Object>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<Object>;
    static bootstrap(paramregistry: MapCodec<TestEnvironmentDefinition<Object>>[]): MapCodec<TestEnvironmentDefinition<Object>>;
    constructor(timelines: Holder<Timeline>[])
    // private timelines: Holder<Timeline>[];
    codec(): MapCodec<TestEnvironmentDefinition$Timelines>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    setup(level: ServerLevel): EnvironmentAttributeSystem;
    teardown(level: ServerLevel, saveData: EnvironmentAttributeSystem): void;
    timelines(): Holder<Timeline>[];
    toString(): string;
}