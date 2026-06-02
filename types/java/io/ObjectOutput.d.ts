import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ObjectOutput extends DataOutput, AutoCloseable, Object{
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeObject(arg0: Object): void;
}