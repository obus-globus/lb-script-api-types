import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { DocTreeVisitor } from '../../../../com/sun/source/doctree/DocTreeVisitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DocTree extends Object{
    accept<R extends unknown, D extends unknown>(arg0: DocTreeVisitor<R, D>, arg1: D): R;
    getKind(): DocTree$Kind;
}