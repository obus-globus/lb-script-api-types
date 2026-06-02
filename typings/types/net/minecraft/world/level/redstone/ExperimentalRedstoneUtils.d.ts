import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export class ExperimentalRedstoneUtils extends Object {
    static initialOrientation(paramlevel: Level, paramfront: Direction, paramup: Direction): Orientation;
    static withFront(paramorientation: Orientation, paramfront: Direction): Orientation;
    constructor()
}