import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CCharPointerPointer } from '../../../../../org/graalvm/nativeimage/c/type/CCharPointerPointer.d.ts'
export abstract class CTypeConversion$CCharPointerPointerHolder extends Object implements AutoCloseable {
    constructor()
    close(): void;
    get(): CCharPointerPointer;
}