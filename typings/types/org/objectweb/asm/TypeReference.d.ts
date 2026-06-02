import type { Object } from '../../../java/lang/Object.d.ts'
export class TypeReference extends Object {
    static CAST: number;
    static CLASS_EXTENDS: number;
    static CLASS_TYPE_PARAMETER: number;
    static CLASS_TYPE_PARAMETER_BOUND: number;
    static CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT: number;
    static CONSTRUCTOR_REFERENCE: number;
    static CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT: number;
    static EXCEPTION_PARAMETER: number;
    static FIELD: number;
    static INSTANCEOF: number;
    static LOCAL_VARIABLE: number;
    static METHOD_FORMAL_PARAMETER: number;
    static METHOD_INVOCATION_TYPE_ARGUMENT: number;
    static METHOD_RECEIVER: number;
    static METHOD_REFERENCE: number;
    static METHOD_REFERENCE_TYPE_ARGUMENT: number;
    static METHOD_RETURN: number;
    static METHOD_TYPE_PARAMETER: number;
    static METHOD_TYPE_PARAMETER_BOUND: number;
    static NEW: number;
    static RESOURCE_VARIABLE: number;
    static THROWS: number;
    static newExceptionReference(paramarg0: number): TypeReference;
    static newFormalParameterReference(paramarg0: number): TypeReference;
    static newSuperTypeReference(paramarg0: number): TypeReference;
    static newTryCatchReference(paramarg0: number): TypeReference;
    static newTypeArgumentReference(paramarg0: number, paramarg1: number): TypeReference;
    static newTypeParameterBoundReference(paramarg0: number, paramarg1: number, paramarg2: number): TypeReference;
    static newTypeParameterReference(paramarg0: number, paramarg1: number): TypeReference;
    static newTypeReference(paramarg0: number): TypeReference;
    constructor(arg0: number)
    // private targetTypeAndInfo: number;
    getExceptionIndex(): number;
    getFormalParameterIndex(): number;
    getSort(): number;
    getSuperTypeIndex(): number;
    getTryCatchBlockIndex(): number;
    getTypeArgumentIndex(): number;
    getTypeParameterBoundIndex(): number;
    getTypeParameterIndex(): number;
    getValue(): number;
}