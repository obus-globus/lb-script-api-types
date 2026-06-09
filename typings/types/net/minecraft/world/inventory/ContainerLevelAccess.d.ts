import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export interface ContainerLevelAccess extends Object {
    evaluate(action: (param0: Level, param1: BlockPos) => T): Optional<T>;
    evaluate<T extends Object | number | string | boolean>(action: (param0: Level, param1: BlockPos) => T, defaultValue: T): T;
    execute(action: (param0: Level, param1: BlockPos) => void): void;
}