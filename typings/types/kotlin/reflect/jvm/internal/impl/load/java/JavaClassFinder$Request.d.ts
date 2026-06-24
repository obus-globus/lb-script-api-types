import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { JavaClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class JavaClassFinder$Request extends Object {
    constructor(arg0: ClassId, arg1: number[], arg2: JavaClass)
    constructor(arg0: ClassId, arg1: number[], arg2: JavaClass, arg3: number, arg4: DefaultConstructorMarker)
    readonly classId: ClassId;
    // private outerClass: JavaClass;
    // private previouslyFoundClassFileContent: number[];
    equals(arg0: Object | null): boolean;
    getClassId(): ClassId;
    hashCode(): number;
    toString(): string;
}