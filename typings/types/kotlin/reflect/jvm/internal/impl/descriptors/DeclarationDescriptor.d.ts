import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { Named } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Named.d.ts'
import type { Annotated } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface DeclarationDescriptor extends Object, Named, Annotated{
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getContainingDeclaration(): DeclarationDescriptor;
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
}