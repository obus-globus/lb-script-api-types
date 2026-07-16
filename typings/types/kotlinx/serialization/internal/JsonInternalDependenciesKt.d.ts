import type { Object } from '../../../java/lang/Object.d.ts'
import type { MissingFieldException } from '../../../kotlinx/serialization/MissingFieldException.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class JsonInternalDependenciesKt extends Object {
    static jsonCachedSerialNames(self: SerialDescriptor): string[];
    static missingFieldExceptionWithNewMessage(exception: MissingFieldException, message: string): MissingFieldException;
}