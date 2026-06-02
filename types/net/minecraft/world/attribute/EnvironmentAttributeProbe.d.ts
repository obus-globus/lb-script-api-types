import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeProbe$ValueProbe } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeProbe$ValueProbe.d.ts'
import type { SpatialAttributeInterpolator } from '../../../../net/minecraft/world/attribute/SpatialAttributeInterpolator.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnvironmentAttributeProbe extends Object {
    constructor()
    // private biomeInterpolator: SpatialAttributeInterpolator;
    // private level: Level;
    // private position: Vec3;
    // private valueProbeFactory: (param0: EnvironmentAttribute<Object>) => EnvironmentAttributeProbe$ValueProbe<Object>;
    // private valueProbes: Map<EnvironmentAttribute<Object>, EnvironmentAttributeProbe$ValueProbe<Object>>;
    getValue<Value extends Object | number | string | boolean>(attribute: EnvironmentAttribute<Value>, partialTicks: number): Value;
    reset(): void;
    tick(level: Level, position: Vec3): void;
}