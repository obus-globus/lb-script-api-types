import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FieldValueTransformer extends Object{
    isAvailable(): boolean;
    transform(receiver: Object, originalValue: Object): Object;
}