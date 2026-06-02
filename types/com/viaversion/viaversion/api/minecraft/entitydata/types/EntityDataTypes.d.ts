import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface EntityDataTypes extends Object{
    byId(arg0: number): EntityDataType;
    values(): EntityDataType[];
}