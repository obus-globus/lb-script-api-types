import type { DocCommentTree } from '../../../../com/sun/source/doctree/DocCommentTree.d.ts'
import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { EntityTree } from '../../../../com/sun/source/doctree/EntityTree.d.ts'
import type { CompilationUnitTree } from '../../../../com/sun/source/tree/CompilationUnitTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { DocSourcePositions } from '../../../../com/sun/source/util/DocSourcePositions.d.ts'
import type { DocTreeFactory } from '../../../../com/sun/source/util/DocTreeFactory.d.ts'
import type { Trees } from '../../../../com/sun/source/util/Trees.d.ts'
import type { BreakIterator } from '../../../../java/text/BreakIterator.d.ts'
import type { ProcessingEnvironment } from '../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { PackageElement } from '../../../../javax/lang/model/element/PackageElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Elements$DocCommentKind } from '../../../../javax/lang/model/util/Elements$DocCommentKind.d.ts'
import type { Diagnostic$Kind } from '../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { FileObject } from '../../../../javax/tools/FileObject.d.ts'
import type { JavaCompiler$CompilationTask } from '../../../../javax/tools/JavaCompiler$CompilationTask.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class DocTrees extends Trees {
    static instance(paramarg0: ProcessingEnvironment): DocTrees;
    static instance(paramarg0: JavaCompiler$CompilationTask): DocTrees;
    static instance(paramarg0: ProcessingEnvironment): Trees;
    static instance(paramarg0: JavaCompiler$CompilationTask): Trees;
    constructor()
    getBreakIterator(): BreakIterator;
    getCharacters(arg0: EntityTree): string;
    getDocCommentKind(arg0: Tree[]): Elements$DocCommentKind;
    getDocCommentTree(arg0: Tree[]): DocCommentTree;
    getDocCommentTree(arg0: Element): DocCommentTree;
    getDocCommentTree(arg0: Element, arg1: string): DocCommentTree;
    getDocCommentTree(arg0: FileObject): DocCommentTree;
    getDocTreeFactory(): DocTreeFactory;
    getDocTreePath(arg0: FileObject, arg1: PackageElement): DocTree[];
    getElement(arg0: DocTree[]): Element;
    getFirstSentence(arg0: DocTree[]): DocTree[];
    getSourcePositions(): DocSourcePositions;
    getType(arg0: DocTree[]): TypeMirror;
    printMessage(arg0: Diagnostic$Kind, arg1: CharSequence, arg2: DocTree, arg3: DocCommentTree, arg4: CompilationUnitTree): void;
    setBreakIterator(arg0: BreakIterator): void;
}