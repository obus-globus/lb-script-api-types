import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export interface CTypeConversion$CCharPointerHolder extends AutoCloseable, Object{
    close(): void;
    get(): CCharPointer;
}