import type { RecordedFrame } from '../../../jdk/jfr/consumer/RecordedFrame.d.ts'
import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedStackTrace extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: Object[])
    getFrames(): RecordedFrame[];
    isTruncated(): boolean;
}