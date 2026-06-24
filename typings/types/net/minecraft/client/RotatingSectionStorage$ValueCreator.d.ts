import type { Object } from '../../../java/lang/Object.d.ts'
import type { RotatingSectionStorage$Value } from '../../../net/minecraft/client/RotatingSectionStorage$Value.d.ts'
export interface RotatingSectionStorage$ValueCreator<T extends RotatingSectionStorage$Value> extends Object{
    createValue(index: number, sectionNode: number): T;
}