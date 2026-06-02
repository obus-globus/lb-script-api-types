import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedThreadGroup extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: Object[])
    getName(): string;
    getParent(): RecordedThreadGroup;
}