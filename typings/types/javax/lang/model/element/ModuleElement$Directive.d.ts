import type { ModuleElement$DirectiveKind } from '../../../../javax/lang/model/element/ModuleElement$DirectiveKind.d.ts'
import type { ModuleElement$DirectiveVisitor } from '../../../../javax/lang/model/element/ModuleElement$DirectiveVisitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement$Directive extends Object{
    accept<R extends Object | number | string | boolean, P extends Object | number | string | boolean>(arg0: ModuleElement$DirectiveVisitor<R, P>, arg1: P): R;
    getKind(): ModuleElement$DirectiveKind;
}