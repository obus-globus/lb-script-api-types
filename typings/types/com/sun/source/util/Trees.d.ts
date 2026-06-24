import type { CatchTree } from '../../../../com/sun/source/tree/CatchTree.d.ts'
import type { ClassTree } from '../../../../com/sun/source/tree/ClassTree.d.ts'
import type { CompilationUnitTree } from '../../../../com/sun/source/tree/CompilationUnitTree.d.ts'
import type { MethodTree } from '../../../../com/sun/source/tree/MethodTree.d.ts'
import type { Scope } from '../../../../com/sun/source/tree/Scope.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { SourcePositions } from '../../../../com/sun/source/util/SourcePositions.d.ts'
import type { ProcessingEnvironment } from '../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { DeclaredType } from '../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { ErrorType } from '../../../../javax/lang/model/type/ErrorType.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Diagnostic$Kind } from '../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { JavaCompiler$CompilationTask } from '../../../../javax/tools/JavaCompiler$CompilationTask.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class Trees extends Object {
    static instance(paramarg0: ProcessingEnvironment): Trees;
    static instance(paramarg0: JavaCompiler$CompilationTask): Trees;
    constructor()
    getDocComment(arg0: Tree[]): string;
    getElement(arg0: Tree[]): Element;
    getLub(arg0: CatchTree): TypeMirror;
    getOriginalType(arg0: ErrorType): TypeMirror;
    getPath(arg0: CompilationUnitTree, arg1: Tree): Tree[];
    getPath(arg0: Element): Tree[];
    getPath(arg0: Element, arg1: AnnotationMirror): Tree[];
    getPath(arg0: Element, arg1: AnnotationMirror, arg2: AnnotationValue): Tree[];
    getScope(arg0: Tree[]): Scope;
    getSourcePositions(): SourcePositions;
    getTree(arg0: Element): Tree;
    getTree(arg0: Element, arg1: AnnotationMirror): Tree;
    getTree(arg0: Element, arg1: AnnotationMirror, arg2: AnnotationValue): Tree;
    getTree(arg0: ExecutableElement): MethodTree;
    getTree(arg0: TypeElement): ClassTree;
    getTypeMirror(arg0: Tree[]): TypeMirror;
    isAccessible(arg0: Scope, arg1: Element, arg2: DeclaredType): boolean;
    isAccessible(arg0: Scope, arg1: TypeElement): boolean;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: Tree, arg3: CompilationUnitTree): void;
}