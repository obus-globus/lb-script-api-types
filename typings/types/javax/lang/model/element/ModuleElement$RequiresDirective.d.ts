import type { ModuleElement } from '../../../../javax/lang/model/element/ModuleElement.d.ts'
import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { ModuleElement$DirectiveKind } from '../../../../javax/lang/model/element/ModuleElement$DirectiveKind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement$RequiresDirective extends ModuleElement$Directive, Object{
    getDependency(): ModuleElement;
    getKind(): ModuleElement$DirectiveKind;
    isStatic(): boolean;
    isTransitive(): boolean;
}