import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class FeatureCountTracker extends Object {
    static chunkDecorated(paramlevel: ServerLevel): void;
    static clearCounts(): void;
    static featurePlaced(paramlevel: ServerLevel, paramfeature: ConfiguredFeature<any, any>, paramtopFeature: Optional<PlacedFeature>): void;
    static logCounts(): void;
    constructor()
}