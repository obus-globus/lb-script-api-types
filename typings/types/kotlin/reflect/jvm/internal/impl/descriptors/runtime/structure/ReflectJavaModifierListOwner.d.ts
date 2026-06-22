import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { JavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaModifierListOwner.d.ts'
export interface ReflectJavaModifierListOwner extends Object, JavaModifierListOwner{
    getModifiers(): number;
    getVisibility(): Visibility;
    isAbstract(): boolean;
    isFinal(): boolean;
    isStatic(): boolean;
}