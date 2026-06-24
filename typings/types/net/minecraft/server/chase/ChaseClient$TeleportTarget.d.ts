import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ChaseClient$TeleportTarget extends Record {
    private constructor(level: ResourceKey<Level>, pos: Vec3, rot: Vec2)
    // private level: ResourceKey<Level>;
    // private pos: Vec3;
    // private rot: Vec2;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): ResourceKey<Level>;
    pos(): Vec3;
    rot(): Vec2;
    toString(): string;
}