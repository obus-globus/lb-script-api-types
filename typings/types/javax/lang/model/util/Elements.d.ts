import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { AnnotatedConstruct } from '../../../../javax/lang/model/AnnotatedConstruct.d.ts'
import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { ModuleElement } from '../../../../javax/lang/model/element/ModuleElement.d.ts'
import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { PackageElement } from '../../../../javax/lang/model/element/PackageElement.d.ts'
import type { RecordComponentElement } from '../../../../javax/lang/model/element/RecordComponentElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { Elements$DocCommentKind } from '../../../../javax/lang/model/util/Elements$DocCommentKind.d.ts'
import type { Elements$Origin } from '../../../../javax/lang/model/util/Elements$Origin.d.ts'
import type { JavaFileObject } from '../../../../javax/tools/JavaFileObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface Elements extends Object{
    getAllAnnotationMirrors(arg0: Element): AnnotationMirror[];
    getAllMembers(arg0: TypeElement): Element[];
    getAllModuleElements(): ModuleElement[];
    getAllPackageElements(arg0: CharSequence): PackageElement[];
    getAllTypeElements(arg0: CharSequence): TypeElement[];
    getBinaryName(arg0: TypeElement): Name;
    getConstantExpression(arg0: Object): string;
    getDocComment(arg0: Element): string;
    getDocCommentKind(arg0: Element): Elements$DocCommentKind;
    getElementValuesWithDefaults(arg0: AnnotationMirror): Map<ExecutableElement, AnnotationValue>;
    getEnumConstantBody(arg0: VariableElement): TypeElement;
    getFileObjectOf(arg0: Element): JavaFileObject;
    getModuleElement(arg0: CharSequence): ModuleElement;
    getModuleOf(arg0: Element): ModuleElement;
    getName(arg0: CharSequence): Name;
    getOrigin(arg0: AnnotatedConstruct, arg1: AnnotationMirror): Elements$Origin;
    getOrigin(arg0: Element): Elements$Origin;
    getOrigin(arg0: ModuleElement, arg1: ModuleElement$Directive): Elements$Origin;
    getOutermostTypeElement(arg0: Element): TypeElement;
    getPackageElement(arg0: ModuleElement, arg1: CharSequence): PackageElement;
    getPackageElement(arg0: CharSequence): PackageElement;
    getPackageOf(arg0: Element): PackageElement;
    getTypeElement(arg0: ModuleElement, arg1: CharSequence): TypeElement;
    getTypeElement(arg0: CharSequence): TypeElement;
    hides(arg0: Element, arg1: Element): boolean;
    isAutomaticModule(arg0: ModuleElement): boolean;
    isBridge(arg0: ExecutableElement): boolean;
    isCanonicalConstructor(arg0: ExecutableElement): boolean;
    isCompactConstructor(arg0: ExecutableElement): boolean;
    isDeprecated(arg0: Element): boolean;
    isFunctionalInterface(arg0: TypeElement): boolean;
    overrides(arg0: ExecutableElement, arg1: ExecutableElement, arg2: TypeElement): boolean;
    printElements(arg0: Writer, ...arg1: Element[]): void;
    recordComponentFor(arg0: ExecutableElement): RecordComponentElement;
}