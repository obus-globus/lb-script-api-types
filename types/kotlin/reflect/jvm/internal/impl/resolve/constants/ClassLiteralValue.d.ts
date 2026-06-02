import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class ClassLiteralValue extends Object {
    constructor(arg0: ClassId, arg1: number)
    readonly arrayNestedness: number;
    readonly classId: ClassId;
    component1(): ClassId;
    component2(): number;
    equals(arg0: Object | null): boolean;
    getArrayNestedness(): number;
    getClassId(): ClassId;
    hashCode(): number;
    toString(): string;
}