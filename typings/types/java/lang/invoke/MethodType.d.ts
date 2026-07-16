import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Constable } from '../../../java/lang/constant/Constable.d.ts'
import type { MethodTypeDesc } from '../../../java/lang/constant/MethodTypeDesc.d.ts'
import type { Invokers } from '../../../java/lang/invoke/Invokers.d.ts'
import type { MethodTypeForm } from '../../../java/lang/invoke/MethodTypeForm.d.ts'
import type { TypeDescriptor$OfMethod } from '../../../java/lang/invoke/TypeDescriptor$OfMethod.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodType extends Object implements Serializable, Constable, TypeDescriptor$OfMethod<Class<Object>, MethodType> {
    static fromMethodDescriptorString(paramarg0: string, paramarg1: ClassLoader): MethodType;
    static genericMethodType(paramarg0: number): MethodType;
    static genericMethodType(paramarg0: number, paramarg1: boolean): MethodType;
    static methodType(paramarg0: Class<Object>): MethodType;
    static methodType(paramarg0: Class<Object>, paramarg1: Class<Object>): MethodType;
    static methodType(paramarg0: Class<Object>, paramarg1: Class<Object>, ...paramarg2: Class<Object>[]): MethodType;
    static methodType(paramarg0: Class<Object>, paramarg1: Class<Object>[]): MethodType;
    static methodType(paramarg0: Class<Object>, paramarg1: MethodType): MethodType;
    private constructor(arg0: Class<Object>, arg1: Class<Object>[])
    // private form: MethodTypeForm;
    // private invokers: Invokers;
    // private methodDescriptor: string;
    // private ptypes: Class<Object>[];
    // private rtype: Class<Object>;
    // private wrapAlt: Object;
    appendParameterTypes(...arg0: Class<Object>[]): MethodType;
    appendParameterTypes(arg0: Class<Object>[]): MethodType;
    asCollectorType(arg0: Class<Object>, arg1: number, arg2: number): MethodType;
    asSpreaderType(arg0: Class<Object>, arg1: number, arg2: number): MethodType;
    basicType(): MethodType;
    // private canConvertParameters(arg0: Class<Object>[], arg1: Class<Object>[]): boolean;
    changeParameterType(arg0: number, arg1: Class<Object>): MethodType;
    changeReturnType(arg0: Class<Object>): MethodType;
    describeConstable(): Optional<MethodTypeDesc>;
    descriptorString(): string;
    dropParameterTypes(arg0: number, arg1: number): MethodType;
    effectivelyIdenticalParameters(arg0: number, arg1: Class<Object>[]): boolean;
    // private equals(arg0: MethodType): boolean;
    equals(arg0: Object | null): boolean;
    erase(): MethodType;
    explicitCastEquivalentToAsType(arg0: MethodType): boolean;
    form(): MethodTypeForm;
    generic(): MethodType;
    hasPrimitives(): boolean;
    hasWrappers(): boolean;
    hashCode(): number;
    insertParameterTypes(arg0: number, ...arg1: Class<Object>[]): MethodType;
    insertParameterTypes(arg0: number, arg1: Class<Object>[]): MethodType;
    invokerType(): MethodType;
    invokers(): Invokers;
    isConvertibleTo(arg0: MethodType): boolean;
    isGeneric(): boolean;
    isViewableAs(arg0: MethodType, arg1: boolean): boolean;
    lastParameterType(): Class<Object>;
    leadingReferenceParameter(): Class<Object>;
    parameterArray(): Class<Object>[];
    parameterCount(): number;
    parameterList(): Class<Object>[];
    parameterSlotCount(): number;
    parameterType(arg0: number): Class<Object>;
    ptypes(): Class<Object>[];
    // private readObject(arg0: ObjectInputStream): void;
    // private readResolve(): Object;
    replaceParameterTypes(arg0: number, arg1: number, ...arg2: Class<Object>[]): MethodType;
    returnType(): Class<Object>;
    rtype(): Class<Object>;
    setForm(arg0: MethodTypeForm): void;
    toMethodDescriptorString(): string;
    toString(): string;
    unwrap(): MethodType;
    wrap(): MethodType;
    // private writeObject(arg0: ObjectOutputStream): void;
}