import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
export interface JavaField extends Object, JavaMember{
    getHasConstantNotNullInitializer(): boolean;
    getType(): JavaType;
    isEnumEntry(): boolean;
}