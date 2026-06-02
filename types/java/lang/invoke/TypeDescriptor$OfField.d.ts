import type { TypeDescriptor } from '../../../java/lang/invoke/TypeDescriptor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeDescriptor$OfField<F extends TypeDescriptor$OfField<F>> extends TypeDescriptor, Object{
    arrayType(): F;
    componentType(): F;
    isArray(): boolean;
    isPrimitive(): boolean;
}