import type { Stopwatch } from '../../../../com/google/common/base/Stopwatch.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestException } from '../../../../net/minecraft/gametest/framework/GameTestException.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { GameTestListener } from '../../../../net/minecraft/gametest/framework/GameTestListener.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
import type { GameTestSequence } from '../../../../net/minecraft/gametest/framework/GameTestSequence.d.ts'
import type { RetryOptions } from '../../../../net/minecraft/gametest/framework/RetryOptions.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { TestInstanceBlockEntity } from '../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class GameTestInfo extends Object {
    constructor(test: Holder$Reference<GameTestInstance>, extraRotation: Rotation, level: ServerLevel, retryOptions: RetryOptions)
    // private chunksLoaded: boolean;
    readonly done: boolean;
    readonly error: GameTestException;
    // private extraRotation: Rotation;
    readonly level: ServerLevel;
    readonly listeners: GameTestListener[];
    // private placedStructure: boolean;
    // private retryOptions: RetryOptions;
    // private runAtTickTimeMap: Object2LongMap<() => void>;
    // private sequences: GameTestSequence[];
    // private started: boolean;
    readonly test: Holder$Reference<GameTestInstance>;
    readonly testBlockPos: BlockPos;
    readonly testInstanceBlockEntity: TestInstanceBlockEntity;
    // private tickCount: number;
    readonly timeoutTicks: number;
    // private timer: Stopwatch;
    addListener(listener: GameTestListener): void;
    copyReset(): GameTestInfo;
    createSequence(): GameTestSequence;
    // private createTestInstanceBlock(testPos: BlockPos, rotation: Rotation, level: ServerLevel): TestInstanceBlockEntity;
    fail(error: GameTestException): void;
    fail(message: Component): void;
    // private finish(): void;
    getError(): GameTestException;
    getLevel(): ServerLevel;
    getListeners(): Stream<GameTestListener>;
    getRotation(): Rotation;
    getRunTime(): number;
    getStructure(): Identifier;
    getStructureBounds(): AABB;
    getTest(): GameTestInstance;
    getTestBlockPos(): BlockPos;
    getTestHolder(): Holder$Reference<GameTestInstance>;
    getTestInstanceBlockEntity(): TestInstanceBlockEntity;
    getTestOrigin(): BlockPos;
    getTick(): number;
    getTimeoutTicks(): number;
    hasFailed(): boolean;
    hasStarted(): boolean;
    hasSucceeded(): boolean;
    id(): Identifier;
    isDone(): boolean;
    isFlaky(): boolean;
    isOptional(): boolean;
    isRequired(): boolean;
    maxAttempts(): number;
    placeStructure(): void;
    prepareTestStructure(): GameTestInfo;
    requiredSuccesses(): number;
    retryOptions(): RetryOptions;
    setRunAtTickTime(time: number, assertAtTickTime: () => void): void;
    setTestBlockPos(testBlockPos: BlockPos): void;
    startExecution(tickDelay: number): GameTestInfo;
    // private startTest(): void;
    succeed(): void;
    tick(runner: GameTestRunner): void;
    // private tickInternal(): void;
    toString(): string;
}