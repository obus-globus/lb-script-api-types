import type { Object } from '../../../java/lang/Object.d.ts'
import type { MissingFieldException } from '../../../kotlinx/serialization/MissingFieldException.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class JsonInternalDependenciesKt extends Object {
    static jsonCachedSerialNames(paramarg0: SerialDescriptor): string[];
    static missingFieldExceptionWithNewMessage(paramarg0: MissingFieldException, paramarg1: string): MissingFieldException;
}