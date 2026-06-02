import type { ProcessingEnvironment } from '../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { PackageElement } from '../../../../../javax/lang/model/element/PackageElement.d.ts'
import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../../javax/lang/model/element/VariableElement.d.ts'
import type { DeclaredType } from '../../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { TypeMirror } from '../../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Bytecode$Visibility } from '../../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
import type { TypeUtils$EquivalencyResult } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeUtils$EquivalencyResult.d.ts'
export abstract class TypeUtils extends Object {
    static getDescriptor(paramarg0: Element): string;
    static getDescriptor(paramarg0: ExecutableElement): string;
    static getElementType(paramarg0: Element): string;
    static getInternalName(paramarg0: TypeElement): string;
    static getInternalName(paramarg0: VariableElement): string;
    static getInternalName(paramarg0: DeclaredType): string;
    static getInternalName(paramarg0: TypeMirror): string;
    static getJavaSignature(paramarg0: string): string;
    static getJavaSignature(paramarg0: Element): string;
    static getName(paramarg0: ExecutableElement): string;
    static getName(paramarg0: VariableElement): string;
    static getPackage(paramarg0: TypeElement): PackageElement;
    static getPackage(paramarg0: TypeMirror): PackageElement;
    static getSimpleName(paramarg0: TypeMirror): string;
    static getTypeName(paramarg0: DeclaredType): string;
    static getTypeName(paramarg0: TypeMirror): string;
    static getVisibility(paramarg0: Element): Bytecode$Visibility;
    static isAssignable(paramarg0: ProcessingEnvironment, paramarg1: TypeMirror, paramarg2: TypeMirror): boolean;
    static isEquivalentType(paramarg0: ProcessingEnvironment, paramarg1: TypeMirror, paramarg2: TypeMirror): TypeUtils$EquivalencyResult;
    static stripGenerics(paramarg0: string): string;
    private constructor()
}