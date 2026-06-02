import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EntityDataHandler extends Object{
    handle(arg0: EntityDataHandlerEvent, arg1: EntityData): void;
}