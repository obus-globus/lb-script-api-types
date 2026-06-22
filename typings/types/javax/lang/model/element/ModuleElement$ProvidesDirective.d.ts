import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { ModuleElement$DirectiveKind } from '../../../../javax/lang/model/element/ModuleElement$DirectiveKind.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement$ProvidesDirective extends ModuleElement$Directive, Object{
    getImplementations(): TypeElement[];
    getKind(): ModuleElement$DirectiveKind;
    getService(): TypeElement;
}