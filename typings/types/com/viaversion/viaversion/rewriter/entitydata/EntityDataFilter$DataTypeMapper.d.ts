import type { EntityDataType } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { AbstractEntityDataTypes } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/AbstractEntityDataTypes.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityDataFilter$DataTypeMapper extends Object {
    constructor(arg0: EntityRewriter<any, any>)
    // private addedTypeIds: (Object | null)[];
    // private mappedDataTypes: AbstractEntityDataTypes;
    // private removedTypeIds: (Object | null)[];
    // private rewriter: EntityRewriter<any, any>;
    // private skippedTypeIds: (Object | null)[];
    added(arg0: EntityDataType): EntityDataFilter$DataTypeMapper;
    // private mappedType(arg0: EntityDataType): EntityDataType;
    // private mappedTypeId(arg0: number): number;
    register(): void;
    removed(arg0: EntityDataType): EntityDataFilter$DataTypeMapper;
    // private shouldCancel(arg0: EntityDataType): boolean;
    skip(arg0: EntityDataType): EntityDataFilter$DataTypeMapper;
}