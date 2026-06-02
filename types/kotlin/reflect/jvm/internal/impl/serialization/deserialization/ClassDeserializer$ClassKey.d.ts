import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
export class ClassDeserializer$ClassKey extends Object {
    constructor(arg0: ClassId, arg1: ClassData)
    readonly classData: ClassData;
    readonly classId: ClassId;
    equals(arg0: Object | null): boolean;
    getClassData(): ClassData;
    getClassId(): ClassId;
    hashCode(): number;
}