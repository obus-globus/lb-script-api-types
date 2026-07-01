import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ReflectKotlinClass$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/ReflectKotlinClass$Factory.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { KotlinJvmBinaryClass$AnnotationVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationVisitor.d.ts'
import type { KotlinJvmBinaryClass$MemberVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$MemberVisitor.d.ts'
import type { KotlinClassHeader } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class ReflectKotlinClass extends Object implements KotlinJvmBinaryClass {
    static Factory: ReflectKotlinClass$Factory;
    constructor(arg0: Class<Object>, arg1: KotlinClassHeader, arg2: DefaultConstructorMarker)
    readonly classHeader: KotlinClassHeader;
    readonly klass: Class<Object>;
    equals(arg0: Object | null): boolean;
    getClassHeader(): KotlinClassHeader;
    getClassId(): ClassId;
    getKlass(): Class<Object>;
    getLocation(): string;
    hashCode(): number;
    loadClassAnnotations(arg0: KotlinJvmBinaryClass$AnnotationVisitor, arg1: number[]): void;
    toString(): string;
    visitMembers(arg0: KotlinJvmBinaryClass$MemberVisitor, arg1: number[]): void;
}