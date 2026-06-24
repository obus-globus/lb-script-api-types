import type { AttributeTree } from '../../../../com/sun/source/doctree/AttributeTree.d.ts'
import type { AuthorTree } from '../../../../com/sun/source/doctree/AuthorTree.d.ts'
import type { CommentTree } from '../../../../com/sun/source/doctree/CommentTree.d.ts'
import type { DeprecatedTree } from '../../../../com/sun/source/doctree/DeprecatedTree.d.ts'
import type { DocCommentTree } from '../../../../com/sun/source/doctree/DocCommentTree.d.ts'
import type { DocRootTree } from '../../../../com/sun/source/doctree/DocRootTree.d.ts'
import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
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
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DocTreeVisitor<R extends unknown, P extends unknown> extends Object{
    visitAttribute(arg0: AttributeTree, arg1: P): R;
    visitAuthor(arg0: AuthorTree, arg1: P): R;
    visitComment(arg0: CommentTree, arg1: P): R;
    visitDeprecated(arg0: DeprecatedTree, arg1: P): R;
    visitDocComment(arg0: DocCommentTree, arg1: P): R;
    visitDocRoot(arg0: DocRootTree, arg1: P): R;
    visitDocType(arg0: DocTypeTree, arg1: P): R;
    visitEndElement(arg0: EndElementTree, arg1: P): R;
    visitEntity(arg0: EntityTree, arg1: P): R;
    visitErroneous(arg0: ErroneousTree, arg1: P): R;
    visitEscape(arg0: EscapeTree, arg1: P): R;
    visitHidden(arg0: HiddenTree, arg1: P): R;
    visitIdentifier(arg0: IdentifierTree, arg1: P): R;
    visitIndex(arg0: IndexTree, arg1: P): R;
    visitInheritDoc(arg0: InheritDocTree, arg1: P): R;
    visitLink(arg0: LinkTree, arg1: P): R;
    visitLiteral(arg0: LiteralTree, arg1: P): R;
    visitOther(arg0: DocTree, arg1: P): R;
    visitParam(arg0: ParamTree, arg1: P): R;
    visitProvides(arg0: ProvidesTree, arg1: P): R;
    visitRawText(arg0: RawTextTree, arg1: P): R;
    visitReference(arg0: ReferenceTree, arg1: P): R;
    visitReturn(arg0: ReturnTree, arg1: P): R;
    visitSee(arg0: SeeTree, arg1: P): R;
    visitSerial(arg0: SerialTree, arg1: P): R;
    visitSerialData(arg0: SerialDataTree, arg1: P): R;
    visitSerialField(arg0: SerialFieldTree, arg1: P): R;
    visitSince(arg0: SinceTree, arg1: P): R;
    visitSnippet(arg0: SnippetTree, arg1: P): R;
    visitSpec(arg0: SpecTree, arg1: P): R;
    visitStartElement(arg0: StartElementTree, arg1: P): R;
    visitSummary(arg0: SummaryTree, arg1: P): R;
    visitSystemProperty(arg0: SystemPropertyTree, arg1: P): R;
    visitText(arg0: TextTree, arg1: P): R;
    visitThrows(arg0: ThrowsTree, arg1: P): R;
    visitUnknownBlockTag(arg0: UnknownBlockTagTree, arg1: P): R;
    visitUnknownInlineTag(arg0: UnknownInlineTagTree, arg1: P): R;
    visitUses(arg0: UsesTree, arg1: P): R;
    visitValue(arg0: ValueTree, arg1: P): R;
    visitVersion(arg0: VersionTree, arg1: P): R;
}