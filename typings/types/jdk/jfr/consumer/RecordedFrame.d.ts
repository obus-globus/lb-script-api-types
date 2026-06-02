import type { RecordedMethod } from '../../../jdk/jfr/consumer/RecordedMethod.d.ts'
import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedFrame extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: Object[])
    getBytecodeIndex(): number;
    getLineNumber(): number;
    getMethod(): RecordedMethod;
    getType(): string;
    isJavaFrame(): boolean;
}