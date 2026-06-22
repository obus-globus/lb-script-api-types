import type { ModuleElement } from '../../../../javax/lang/model/element/ModuleElement.d.ts'
import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { ModuleElement$DirectiveKind } from '../../../../javax/lang/model/element/ModuleElement$DirectiveKind.d.ts'
import type { PackageElement } from '../../../../javax/lang/model/element/PackageElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement$OpensDirective extends ModuleElement$Directive, Object{
    getKind(): ModuleElement$DirectiveKind;
    getPackage(): PackageElement;
    getTargetModules(): ModuleElement[];
}