import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
export interface ClassDataFinder extends Object{
    findClassData(arg0: ClassId): ClassData;
}