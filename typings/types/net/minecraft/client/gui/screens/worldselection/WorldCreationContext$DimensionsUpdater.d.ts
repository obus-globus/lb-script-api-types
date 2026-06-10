import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryAccess$Frozen } from '../../../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { WorldDimensions } from '../../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
export interface WorldCreationContext$DimensionsUpdater extends BiFunction<RegistryAccess$Frozen, WorldDimensions, WorldDimensions>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: WorldDimensions) => V): (param0: RegistryAccess$Frozen, param1: WorldDimensions) => V;
}