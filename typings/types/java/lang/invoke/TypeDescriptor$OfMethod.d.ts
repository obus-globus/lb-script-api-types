import type { TypeDescriptor } from '../../../java/lang/invoke/TypeDescriptor.d.ts'
import type { TypeDescriptor$OfField } from '../../../java/lang/invoke/TypeDescriptor$OfField.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeDescriptor$OfMethod<F extends TypeDescriptor$OfField<F>, M extends TypeDescriptor$OfMethod<F, M>> extends TypeDescriptor, Object{
    changeParameterType(arg0: number, arg1: F): M;
    changeReturnType(arg0: F): M;
    descriptorString(): string;
    dropParameterTypes(arg0: number, arg1: number): M;
    insertParameterTypes(arg0: number, ...arg1: F[]): M;
    parameterArray(): F[];
    parameterCount(): number;
    parameterList(): F[];
    parameterType(arg0: number): F;
    returnType(): F;
}