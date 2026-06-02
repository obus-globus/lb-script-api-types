import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { PositionSourceType } from '../../../../../net/minecraft/world/level/gameevent/PositionSourceType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface PositionSource extends Object{
    getPosition(level: Level): Optional<Vec3>;
    getType(): PositionSourceType<PositionSource>;
}