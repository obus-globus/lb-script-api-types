import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface TestEnvironmentDefinition<SavedDataType extends Object | number | string | boolean> extends Object{
    codec(): MapCodec<TestEnvironmentDefinition<SavedDataType>>;
    setup(level: ServerLevel): SavedDataType;
    teardown(level: ServerLevel, saveData: SavedDataType): void;
}