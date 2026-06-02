import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { JavaField } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface DeclaredMemberIndex extends Object{
    findFieldByName(arg0: Name): JavaField;
    findMethodsByName(arg0: Name): E[];
    findRecordComponentByName(arg0: Name): JavaRecordComponent;
    getFieldNames(): Name[];
    getMethodNames(): Name[];
    getRecordComponentNames(): Name[];
}