import type { FinalizablePhantomReference } from '../../../../com/google/common/base/FinalizablePhantomReference.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { FileBackedOutputStream$FbosByteSource } from '../../../../com/google/common/io/FileBackedOutputStream$FbosByteSource.d.ts'
import type { FileBackedOutputStream$State } from '../../../../com/google/common/io/FileBackedOutputStream$State.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileBackedOutputStream$FinalizableReference extends FinalizablePhantomReference<ByteSource> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: FileBackedOutputStream$FbosByteSource)
    // private state: FileBackedOutputStream$State;
    finalizeReferent(): void;
}