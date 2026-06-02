import type { Member } from '../../../../../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaMember.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
export class ReflectJavaRecordComponent extends ReflectJavaMember implements JavaRecordComponent {
    constructor(arg0: Object)
    // private recordComponent: Object;
    getMember(): Member;
    getType(): JavaType;
    isVararg(): boolean;
}