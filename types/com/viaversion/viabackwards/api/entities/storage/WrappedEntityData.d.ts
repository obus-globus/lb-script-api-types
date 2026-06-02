import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WrappedEntityData extends Record {
    constructor(entityDataList: EntityData[])
    // private entityDataList: EntityData[];
    add(arg0: EntityData): void;
    entityDataList(): EntityData[];
    equals(arg0: Object | null): boolean;
    get(arg0: number): EntityData;
    has(arg0: EntityData): boolean;
    hashCode(): number;
    remove(arg0: EntityData): void;
    remove(arg0: number): void;
    toString(): string;
}