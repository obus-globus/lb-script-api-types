import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class ModuleCombineMobs$CombineKey extends Record {
    constructor(type: EntityType<Object>, babyGroup: boolean)
    // private babyGroup: boolean;
    /*not mapped: */ babyGroup(): boolean;
    // private type: EntityType<Object>;
    /*not mapped: */ type(): EntityType<Object>;
    component1(): EntityType<Object>;
    component2(): boolean;
    copy(type: EntityType<Object>, babyGroup: boolean): ModuleCombineMobs$CombineKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}