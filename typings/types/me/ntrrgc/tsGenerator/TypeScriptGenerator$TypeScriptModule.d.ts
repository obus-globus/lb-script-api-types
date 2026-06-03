import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../kotlin/reflect/KTypeParameter.d.ts'
import type { TypeScriptType } from '../../../me/ntrrgc/tsGenerator/TypeScriptType.d.ts'
export class TypeScriptGenerator$TypeScriptModule extends Object {
    constructor(null_: TypeScriptGenerator$TypeScriptModule, klass: KClass<Object>)
    definition: string;
    readonly dependentTypes: KClass<Object>[];
    readonly klass: KClass<Object>;
    readonly moduleText: string;
    readonly path: string;
    readonly typeAliases: Map<KClass<Object>, string>;
    // private arrayFromKType(kType: KType): string;
    // private constructorsOf(klass: KClass<Object>): string;
    // private createKotlinType(javaClass: Class<Object>): KType;
    findSingleAbstractMethod(javaType: Type): Method | null;
    formatFunctionalInterfaceType(type: Type, kType: KType | null): string;
    // private formatKType(kType: KType, isInTypeConstraint: boolean, transformFunctionalInterface: boolean): TypeScriptType;
    // private formatPropertyFunctionType(type: KType): string;
    // private formatTypeParameters(typeParameters: KTypeParameter[]): string;
    // private functionsOf(klass: KClass<Object>, interfaceSupertypes: KType[], typeParameters: KTypeParameter[]): string;
    // private generateDefinition(): string;
    // private generateInterface(klass: KClass<Object>): string;
    // private getFilePathForClassWithoutExtension(klass: KClass<Object>): string;
    // private getIterableElementType(kType: KType): KType | null;
    isFunctionalInterface(javaType: Type): boolean;
    // private javaTypeToKotlinType(type: Type): KType;
    // private kotlinFunctionArrow(kType: KType): string | null;
    // private mapFromKType(kType: KType): string;
    // private nonPrimitiveFromKType(kType: KType): string;
    // private propertiesOf(klass: KClass<Object>): string;
    // private staticFieldsOf(klass: KClass<Object>): string;
    // private staticMethodsOf(klass: KClass<Object>, interfaceSupertypes: KType[], typeParameters: KTypeParameter[]): string;
    // private tsNameFor(kClass: KClass<Object>): string;
}