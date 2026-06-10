import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
import type { ProjectileItem$DispenseConfig } from '../../../../net/minecraft/world/item/ProjectileItem$DispenseConfig.d.ts'
import type { ProjectileItem$PositionFunction } from '../../../../net/minecraft/world/item/ProjectileItem$PositionFunction.d.ts'
export class ProjectileItem$DispenseConfig$Builder extends Object {
    constructor()
    // private overrideDispenseEvent: OptionalInt;
    // private positionFunction: (param0: BlockSource, param1: Direction) => Position;
    // private power: number;
    // private uncertainty: number;
    build(): ProjectileItem$DispenseConfig;
    overrideDispenseEvent(dispenseEvent: number): ProjectileItem$DispenseConfig$Builder;
    positionFunction(positionFunction: (param0: BlockSource, param1: Direction) => Position): ProjectileItem$DispenseConfig$Builder;
    power(power: number): ProjectileItem$DispenseConfig$Builder;
    uncertainty(uncertainty: number): ProjectileItem$DispenseConfig$Builder;
}