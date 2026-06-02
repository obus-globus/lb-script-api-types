import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AssignableField<Object extends Object | number | string | boolean, Type extends Object | number | string | boolean> extends Object{
    readonly name: string;
    trySetWithoutReassigning(container: Object, newValue: Type): Type | null;
}