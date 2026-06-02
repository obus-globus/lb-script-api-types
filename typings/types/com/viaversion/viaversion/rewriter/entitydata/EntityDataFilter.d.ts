import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataType } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { EntityDataHandler } from '../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandler.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityDataFilter extends Record {
    // private dataType: EntityDataType;
    // private filterFamily: boolean;
    // private handler: (param0: EntityDataHandlerEvent, param1: EntityData) => void;
    // private index: number;
    // private type: EntityType;
    dataType(): EntityDataType;
    equals(arg0: Object | null): boolean;
    filterFamily(): boolean;
    handler(): (param0: EntityDataHandlerEvent, param1: EntityData) => void;
    hashCode(): number;
    index(): number;
    isFiltered(arg0: EntityType, arg1: EntityData): boolean;
    // private matchesType(arg0: EntityType): boolean;
    toString(): string;
    type(): EntityType;
}