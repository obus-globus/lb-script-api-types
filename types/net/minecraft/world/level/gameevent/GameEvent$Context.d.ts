import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class GameEvent$Context extends Record {
    static of(paramsourceEntity: Entity): GameEvent$Context;
    static of(paramsourceEntity: Entity, paramstate: BlockState): GameEvent$Context;
    static of(paramstate: BlockState): GameEvent$Context;
    constructor(sourceEntity: Entity, affectedState: BlockState)
    // private affectedState: BlockState;
    // private sourceEntity: Entity;
    affectedState(): BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sourceEntity(): Entity;
    toString(): string;
}