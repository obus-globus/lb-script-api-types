import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class ModuleCombineMobs$CombineKey extends Record {
    constructor(type: EntityType<any>, babyGroup: boolean)
    // private babyGroup: boolean;
    /*not mapped: */ babyGroup(): boolean;
    // private type: EntityType<any>;
    /*not mapped: */ type(): EntityType<any>;
    component1(): EntityType<any>;
    component2(): boolean;
    copy(type: EntityType<any>, babyGroup: boolean): ModuleCombineMobs$CombineKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}