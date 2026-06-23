import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AssignableField<Object extends unknown, Type extends unknown> extends Object{
    readonly name: string;
    trySetWithoutReassigning(container: Object, newValue: Type): Type | null;
}