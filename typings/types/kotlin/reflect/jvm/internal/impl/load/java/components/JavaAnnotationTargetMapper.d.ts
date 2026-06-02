import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinTarget } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/KotlinTarget.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { ConstantValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
export class JavaAnnotationTargetMapper extends Object {
    static INSTANCE: JavaAnnotationTargetMapper;
    private constructor()
    mapJavaRetentionArgument$descriptors_jvm(arg0: JavaAnnotationArgument): ConstantValue<Object>;
    mapJavaTargetArgumentByName(arg0: string): KotlinTarget[];
    mapJavaTargetArguments$descriptors_jvm(arg0: JavaAnnotationArgument[]): ConstantValue<Object>;
}