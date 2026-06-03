import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DeclaredMemberIndex } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/DeclaredMemberIndex.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaField } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaMember } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { JavaMethod } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ClassDeclaredMemberIndex extends Object implements DeclaredMemberIndex {
    constructor(arg0: JavaClass, arg1: (param0: JavaMember) => boolean)
    // private components: Map<Name, JavaRecordComponent>;
    // private fields: Map<Name, JavaField>;
    // private jClass: JavaClass;
    // private memberFilter: (param0: JavaMember) => boolean;
    // private methodFilter: (param0: JavaMethod) => boolean;
    // private methods: Map<Name, JavaMethod[]>;
    findFieldByName(arg0: Name): JavaField;
    findMethodsByName(arg0: Name): E[];
    findRecordComponentByName(arg0: Name): JavaRecordComponent;
    getFieldNames(): Name[];
    getMethodNames(): Name[];
    getRecordComponentNames(): Name[];
}