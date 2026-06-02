import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Tree } from '../../../../sun/reflect/generics/tree/Tree.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export interface TypeTree extends Object, Tree{
    accept(arg0: TypeTreeVisitor<Object>): void;
}