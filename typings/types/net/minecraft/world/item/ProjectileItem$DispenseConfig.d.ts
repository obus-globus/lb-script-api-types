import type { Record } from '../../../../java/lang/Record.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
import type { ProjectileItem$DispenseConfig$Builder } from '../../../../net/minecraft/world/item/ProjectileItem$DispenseConfig$Builder.d.ts'
import type { ProjectileItem$PositionFunction } from '../../../../net/minecraft/world/item/ProjectileItem$PositionFunction.d.ts'
export class ProjectileItem$DispenseConfig extends Record {
    static DEFAULT: ProjectileItem$DispenseConfig;
    static builder(): ProjectileItem$DispenseConfig$Builder;
    // private overrideDispenseEvent: OptionalInt;
    // private positionFunction: (param0: BlockSource, param1: Direction) => Position;
    // private power: number;
    // private uncertainty: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    overrideDispenseEvent(): OptionalInt;
    positionFunction(): (param0: BlockSource, param1: Direction) => Position;
    power(): number;
    toString(): string;
    uncertainty(): number;
}