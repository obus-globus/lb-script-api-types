import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { ModuleElement$DirectiveKind } from '../../../../javax/lang/model/element/ModuleElement$DirectiveKind.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement$UsesDirective extends ModuleElement$Directive, Object{
    getKind(): ModuleElement$DirectiveKind;
    getService(): TypeElement;
}