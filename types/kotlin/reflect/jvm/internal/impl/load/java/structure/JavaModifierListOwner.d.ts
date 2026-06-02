import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
export interface JavaModifierListOwner extends Object, JavaElement{
    getVisibility(): Visibility;
    isAbstract(): boolean;
    isFinal(): boolean;
    isStatic(): boolean;
}