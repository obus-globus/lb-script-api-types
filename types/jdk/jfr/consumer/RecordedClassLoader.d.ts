import type { RecordedClass } from '../../../jdk/jfr/consumer/RecordedClass.d.ts'
import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedClassLoader extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: number, arg2: Object[])
    // private uniqueId: number;
    getId(): number;
    getName(): string;
    getType(): RecordedClass;
}