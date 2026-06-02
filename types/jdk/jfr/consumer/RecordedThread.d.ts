import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { RecordedThreadGroup } from '../../../jdk/jfr/consumer/RecordedThreadGroup.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedThread extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: number, arg2: Object[])
    // private uniqueId: number;
    getId(): number;
    getJavaName(): string;
    getJavaThreadId(): number;
    getOSName(): string;
    getOSThreadId(): number;
    getThreadGroup(): RecordedThreadGroup;
    isVirtual(): boolean;
}