import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export class TestEnvironmentDefinition$ClockTime extends Record implements TestEnvironmentDefinition<number> {
    static CODEC: Codec<Holder<TestEnvironmentDefinition<Object>>>;
    static CODEC: MapCodec<TestEnvironmentDefinition$ClockTime>;
    static DIRECT_CODEC: Codec<TestEnvironmentDefinition<Object>>;
    static activate(paramenvironment: TestEnvironmentDefinition<Object>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<Object>;
    static bootstrap(paramregistry: MapCodec<TestEnvironmentDefinition<Object>>[]): MapCodec<TestEnvironmentDefinition<Object>>;
    constructor(clock: Holder<WorldClock>, time: number)
    // private clock: Holder<WorldClock>;
    // private time: number;
    clock(): Holder<WorldClock>;
    codec(): MapCodec<TestEnvironmentDefinition$ClockTime>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    setup(level: ServerLevel): number;
    teardown(level: ServerLevel, saveData: number): void;
    time(): number;
    toString(): string;
}