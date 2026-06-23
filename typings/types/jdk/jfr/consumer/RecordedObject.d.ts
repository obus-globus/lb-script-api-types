import type { Class } from '../../../java/lang/Class.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { OffsetDateTime } from '../../../java/time/OffsetDateTime.d.ts'
import type { ValueDescriptor } from '../../../jdk/jfr/ValueDescriptor.d.ts'
import type { RecordedClass } from '../../../jdk/jfr/consumer/RecordedClass.d.ts'
import type { RecordedThread } from '../../../jdk/jfr/consumer/RecordedThread.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedObject extends Object {
    constructor(arg0: ObjectContext, arg1: Object[])
    // private objectContext: ObjectContext;
    // private objects: Object[];
    getBoolean(arg0: string): boolean;
    getByte(arg0: string): number;
    getChar(arg0: string): string;
    getClass(arg0: string): RecordedClass;
    getDouble(arg0: string): number;
    // private getDuration(arg0: number, arg1: string): Duration;
    getDuration(arg0: string): Duration;
    getFields(): ValueDescriptor[];
    getFloat(arg0: string): number;
    // private getInstant(arg0: number, arg1: string): Instant;
    getInstant(arg0: string): Instant;
    getInt(arg0: string): number;
    getLong(arg0: string): number;
    // private getOffsetDateTime(arg0: string): OffsetDateTime;
    getShort(arg0: string): number;
    getString(arg0: string): string;
    getThread(arg0: string): RecordedThread;
    getTyped<T extends unknown>(arg0: string, arg1: Class<T>, arg2: T): T;
    // private getTypedValue<T extends unknown>(arg0: string, arg1: string): T;
    getValue<T extends unknown>(arg0: string): T;
    // private getValue(arg0: string, arg1: boolean): Object;
    // private getValueDescriptor(arg0: ValueDescriptor[], arg1: string, arg2: string): ValueDescriptor;
    hasField(arg0: string): boolean;
    // private isStackFrameType(arg0: string): boolean;
    objectAt(arg0: number): Object;
    // private structifyArray(arg0: ValueDescriptor, arg1: Object[], arg2: number): Object[];
    toString(): string;
}