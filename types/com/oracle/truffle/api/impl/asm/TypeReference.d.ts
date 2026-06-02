import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
    static newExceptionReference(paramexceptionIndex: number): TypeReference;
    static newFormalParameterReference(paramparamIndex: number): TypeReference;
    static newSuperTypeReference(paramitfIndex: number): TypeReference;
    static newTryCatchReference(paramtryCatchBlockIndex: number): TypeReference;
    static newTypeArgumentReference(paramsort: number, paramargIndex: number): TypeReference;
    static newTypeParameterBoundReference(paramsort: number, paramparamIndex: number, paramboundIndex: number): TypeReference;
    static newTypeParameterReference(paramsort: number, paramparamIndex: number): TypeReference;
    static newTypeReference(paramsort: number): TypeReference;
    constructor(typeRef: number)
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