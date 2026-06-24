import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { TextTree } from '../../../../com/sun/source/doctree/TextTree.d.ts'
import type { Diagnostic } from '../../../../javax/tools/Diagnostic.d.ts'
import type { JavaFileObject } from '../../../../javax/tools/JavaFileObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ErroneousTree extends TextTree, Object{
    getBody(): string;
    getDiagnostic(): Diagnostic<JavaFileObject>;
    getKind(): DocTree$Kind;
}