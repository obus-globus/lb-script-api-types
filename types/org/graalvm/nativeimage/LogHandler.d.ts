import type { Object } from '../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
export interface LogHandler extends Object{
    fatalError(): void;
    flush(): void;
    log(bytes: CCharPointer, length: UnsignedWord): void;
}