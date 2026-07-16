import type { File } from '../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { IORandomAccessFile } from '../../../../org/apache/commons/io/IORandomAccessFile.d.ts'
import type { IOConsumer } from '../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOFunction } from '../../../../org/apache/commons/io/function/IOFunction.d.ts'
export class RandomAccessFileMode extends Enum<RandomAccessFileMode> {
    static READ_ONLY: RandomAccessFileMode;
    static READ_WRITE: RandomAccessFileMode;
    static READ_WRITE_SYNC_ALL: RandomAccessFileMode;
    static READ_WRITE_SYNC_CONTENT: RandomAccessFileMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RandomAccessFileMode;
    static valueOf(...paramarg0: OpenOption[]): RandomAccessFileMode;
    static valueOfMode(paramarg0: string): RandomAccessFileMode;
    static values(): RandomAccessFileMode[];
    private constructor(arg2: string, arg3: number)
    // private level: number;
    readonly mode: string;
    accept(arg0: Path, arg1: (param0: RandomAccessFile) => void): void;
    apply<T extends unknown>(arg0: Path, arg1: (param0: RandomAccessFile) => T): T;
    create(arg0: File): RandomAccessFile;
    create(arg0: Path): RandomAccessFile;
    create(arg0: string): RandomAccessFile;
    // private getLevel(): number;
    getMode(): string;
    implies(arg0: RandomAccessFileMode): boolean;
    io(arg0: string): IORandomAccessFile;
    name(): "READ_ONLY" | "READ_WRITE" | "READ_WRITE_SYNC_ALL" | "READ_WRITE_SYNC_CONTENT";
}