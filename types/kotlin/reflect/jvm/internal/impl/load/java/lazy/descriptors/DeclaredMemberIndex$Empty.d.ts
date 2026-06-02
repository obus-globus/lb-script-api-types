import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DeclaredMemberIndex } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/DeclaredMemberIndex.d.ts'
import type { JavaField } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaMethod } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class DeclaredMemberIndex$Empty extends Object implements DeclaredMemberIndex {
    static INSTANCE: DeclaredMemberIndex$Empty;
    private constructor()
    findFieldByName(arg0: Name): JavaField;
    findMethodsByName(arg0: Name): JavaMethod[];
    findRecordComponentByName(arg0: Name): JavaRecordComponent;
    getFieldNames(): Name[];
    getMethodNames(): Name[];
    getRecordComponentNames(): Name[];
}