import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { ModuleElement$ExportsDirective } from '../../../../javax/lang/model/element/ModuleElement$ExportsDirective.d.ts'
import type { ModuleElement$OpensDirective } from '../../../../javax/lang/model/element/ModuleElement$OpensDirective.d.ts'
import type { ModuleElement$ProvidesDirective } from '../../../../javax/lang/model/element/ModuleElement$ProvidesDirective.d.ts'
import type { ModuleElement$RequiresDirective } from '../../../../javax/lang/model/element/ModuleElement$RequiresDirective.d.ts'
import type { ModuleElement$UsesDirective } from '../../../../javax/lang/model/element/ModuleElement$UsesDirective.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement$DirectiveVisitor<R extends Object | number | string | boolean, P extends Object | number | string | boolean> extends Object{
    visit(arg0: ModuleElement$Directive): R;
    visit(arg0: ModuleElement$Directive, arg1: P): R;
    visitExports(arg0: ModuleElement$ExportsDirective, arg1: P): R;
    visitOpens(arg0: ModuleElement$OpensDirective, arg1: P): R;
    visitProvides(arg0: ModuleElement$ProvidesDirective, arg1: P): R;
    visitRequires(arg0: ModuleElement$RequiresDirective, arg1: P): R;
    visitUnknown(arg0: ModuleElement$Directive, arg1: P): R;
    visitUses(arg0: ModuleElement$UsesDirective, arg1: P): R;
}