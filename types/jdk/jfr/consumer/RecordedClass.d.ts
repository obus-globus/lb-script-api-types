import type { RecordedClassLoader } from '../../../jdk/jfr/consumer/RecordedClassLoader.d.ts'
import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedClass extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: number, arg2: Object[])
    // private uniqueId: number;
    getClassLoader(): RecordedClassLoader;
    getId(): number;
    getModifiers(): number;
    getName(): string;
}