import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagRegistry } from '../../../../net/minecraft/world/flag/FeatureFlagRegistry.d.ts'
import type { FeatureFlagUniverse } from '../../../../net/minecraft/world/flag/FeatureFlagUniverse.d.ts'
export class FeatureFlagRegistry$Builder extends Object {
    constructor(universeId: string)
    // private flags: JavaMap<Identifier, FeatureFlag>;
    // private id: number;
    // private universe: FeatureFlagUniverse;
    build(): FeatureFlagRegistry;
    create(name: Identifier): FeatureFlag;
    createVanilla(name: string): FeatureFlag;
}