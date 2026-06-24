import type { AttributeTree } from '../../../../com/sun/source/doctree/AttributeTree.d.ts'
import type { AttributeTree$ValueKind } from '../../../../com/sun/source/doctree/AttributeTree$ValueKind.d.ts'
import type { AuthorTree } from '../../../../com/sun/source/doctree/AuthorTree.d.ts'
import type { CommentTree } from '../../../../com/sun/source/doctree/CommentTree.d.ts'
import type { DeprecatedTree } from '../../../../com/sun/source/doctree/DeprecatedTree.d.ts'
import type { DocCommentTree } from '../../../../com/sun/source/doctree/DocCommentTree.d.ts'
import type { DocRootTree } from '../../../../com/sun/source/doctree/DocRootTree.d.ts'
import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { DocTypeTree } from '../../../../com/sun/source/doctree/DocTypeTree.d.ts'
import type { EndElementTree } from '../../../../com/sun/source/doctree/EndElementTree.d.ts'
import type { EntityTree } from '../../../../com/sun/source/doctree/EntityTree.d.ts'
import type { ErroneousTree } from '../../../../com/sun/source/doctree/ErroneousTree.d.ts'
import type { EscapeTree } from '../../../../com/sun/source/doctree/EscapeTree.d.ts'
import type { HiddenTree } from '../../../../com/sun/source/doctree/HiddenTree.d.ts'
import type { IdentifierTree } from '../../../../com/sun/source/doctree/IdentifierTree.d.ts'
import type { IndexTree } from '../../../../com/sun/source/doctree/IndexTree.d.ts'
import type { InheritDocTree } from '../../../../com/sun/source/doctree/InheritDocTree.d.ts'
import type { LinkTree } from '../../../../com/sun/source/doctree/LinkTree.d.ts'
import type { LiteralTree } from '../../../../com/sun/source/doctree/LiteralTree.d.ts'
import type { ParamTree } from '../../../../com/sun/source/doctree/ParamTree.d.ts'
import type { ProvidesTree } from '../../../../com/sun/source/doctree/ProvidesTree.d.ts'
import type { RawTextTree } from '../../../../com/sun/source/doctree/RawTextTree.d.ts'
import type { ReferenceTree } from '../../../../com/sun/source/doctree/ReferenceTree.d.ts'
import type { ReturnTree } from '../../../../com/sun/source/doctree/ReturnTree.d.ts'
import type { SeeTree } from '../../../../com/sun/source/doctree/SeeTree.d.ts'
import type { SerialDataTree } from '../../../../com/sun/source/doctree/SerialDataTree.d.ts'
import type { SerialFieldTree } from '../../../../com/sun/source/doctree/SerialFieldTree.d.ts'
import type { SerialTree } from '../../../../com/sun/source/doctree/SerialTree.d.ts'
import type { SinceTree } from '../../../../com/sun/source/doctree/SinceTree.d.ts'
import type { SnippetTree } from '../../../../com/sun/source/doctree/SnippetTree.d.ts'
import type { SpecTree } from '../../../../com/sun/source/doctree/SpecTree.d.ts'
import type { StartElementTree } from '../../../../com/sun/source/doctree/StartElementTree.d.ts'
import type { SummaryTree } from '../../../../com/sun/source/doctree/SummaryTree.d.ts'
import type { SystemPropertyTree } from '../../../../com/sun/source/doctree/SystemPropertyTree.d.ts'
import type { TextTree } from '../../../../com/sun/source/doctree/TextTree.d.ts'
import type { ThrowsTree } from '../../../../com/sun/source/doctree/ThrowsTree.d.ts'
import type { UnknownBlockTagTree } from '../../../../com/sun/source/doctree/UnknownBlockTagTree.d.ts'
import type { UnknownInlineTagTree } from '../../../../com/sun/source/doctree/UnknownInlineTagTree.d.ts'
import type { UsesTree } from '../../../../com/sun/source/doctree/UsesTree.d.ts'
import type { ValueTree } from '../../../../com/sun/source/doctree/ValueTree.d.ts'
import type { VersionTree } from '../../../../com/sun/source/doctree/VersionTree.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Diagnostic } from '../../../../javax/tools/Diagnostic.d.ts'
import type { JavaFileObject } from '../../../../javax/tools/JavaFileObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DocTreeFactory extends Object{
    at(arg0: number): DocTreeFactory;
    getFirstSentence(arg0: DocTree[]): DocTree[];
    newAttributeTree(arg0: Name, arg1: AttributeTree$ValueKind, arg2: DocTree[]): AttributeTree;
    newAuthorTree(arg0: DocTree[]): AuthorTree;
    newCodeTree(arg0: TextTree): LiteralTree;
    newCommentTree(arg0: string): CommentTree;
    newDeprecatedTree(arg0: DocTree[]): DeprecatedTree;
    newDocCommentTree(arg0: DocTree[], arg1: DocTree[]): DocCommentTree;
    newDocCommentTree(arg0: DocTree[], arg1: DocTree[], arg2: DocTree[], arg3: DocTree[]): DocCommentTree;
    newDocRootTree(): DocRootTree;
    newDocTypeTree(arg0: string): DocTypeTree;
    newEndElementTree(arg0: Name): EndElementTree;
    newEntityTree(arg0: Name): EntityTree;
    newErroneousTree(arg0: string, arg1: Diagnostic<JavaFileObject>): ErroneousTree;
    newEscapeTree(arg0: string): EscapeTree;
    newExceptionTree(arg0: ReferenceTree, arg1: DocTree[]): ThrowsTree;
    newHiddenTree(arg0: DocTree[]): HiddenTree;
    newIdentifierTree(arg0: Name): IdentifierTree;
    newIndexTree(arg0: DocTree, arg1: DocTree[]): IndexTree;
    newInheritDocTree(): InheritDocTree;
    newInheritDocTree(arg0: ReferenceTree): InheritDocTree;
    newLinkPlainTree(arg0: ReferenceTree, arg1: DocTree[]): LinkTree;
    newLinkTree(arg0: ReferenceTree, arg1: DocTree[]): LinkTree;
    newLiteralTree(arg0: TextTree): LiteralTree;
    newParamTree(arg0: boolean, arg1: IdentifierTree, arg2: DocTree[]): ParamTree;
    newProvidesTree(arg0: ReferenceTree, arg1: DocTree[]): ProvidesTree;
    newRawTextTree(arg0: DocTree$Kind, arg1: string): RawTextTree;
    newReferenceTree(arg0: string): ReferenceTree;
    newReturnTree(arg0: DocTree[]): ReturnTree;
    newReturnTree(arg0: boolean, arg1: DocTree[]): ReturnTree;
    newSeeTree(arg0: DocTree[]): SeeTree;
    newSerialDataTree(arg0: DocTree[]): SerialDataTree;
    newSerialFieldTree(arg0: IdentifierTree, arg1: ReferenceTree, arg2: DocTree[]): SerialFieldTree;
    newSerialTree(arg0: DocTree[]): SerialTree;
    newSinceTree(arg0: DocTree[]): SinceTree;
    newSnippetTree(arg0: DocTree[], arg1: TextTree): SnippetTree;
    newSpecTree(arg0: TextTree, arg1: DocTree[]): SpecTree;
    newStartElementTree(arg0: Name, arg1: DocTree[], arg2: boolean): StartElementTree;
    newSummaryTree(arg0: DocTree[]): SummaryTree;
    newSystemPropertyTree(arg0: Name): SystemPropertyTree;
    newTextTree(arg0: string): TextTree;
    newThrowsTree(arg0: ReferenceTree, arg1: DocTree[]): ThrowsTree;
    newUnknownBlockTagTree(arg0: Name, arg1: DocTree[]): UnknownBlockTagTree;
    newUnknownInlineTagTree(arg0: Name, arg1: DocTree[]): UnknownInlineTagTree;
    newUsesTree(arg0: ReferenceTree, arg1: DocTree[]): UsesTree;
    newValueTree(arg0: ReferenceTree): ValueTree;
    newValueTree(arg0: TextTree, arg1: ReferenceTree): ValueTree;
    newVersionTree(arg0: DocTree[]): VersionTree;
}