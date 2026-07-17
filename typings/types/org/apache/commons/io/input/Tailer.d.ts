import type { File } from '../../../../../java/io/File.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tailer$Builder } from '../../../../../org/apache/commons/io/input/Tailer$Builder.d.ts'
import type { Tailer$RandomAccessResourceBridge } from '../../../../../org/apache/commons/io/input/Tailer$RandomAccessResourceBridge.d.ts'
import type { Tailer$Tailable } from '../../../../../org/apache/commons/io/input/Tailer$Tailable.d.ts'
import type { TailerListener } from '../../../../../org/apache/commons/io/input/TailerListener.d.ts'
export class Tailer extends Object implements AutoCloseable, Runnable {
    static builder(): Tailer$Builder;
    static create(paramarg0: File, paramarg1: Charset, paramarg2: TailerListener, paramarg3: number, paramarg4: boolean, paramarg5: boolean, paramarg6: number): Tailer;
    static create(paramarg0: File, paramarg1: TailerListener): Tailer;
    static create(paramarg0: File, paramarg1: TailerListener, paramarg2: number): Tailer;
    static create(paramarg0: File, paramarg1: TailerListener, paramarg2: number, paramarg3: boolean): Tailer;
    static create(paramarg0: File, paramarg1: TailerListener, paramarg2: number, paramarg3: boolean, paramarg4: boolean): Tailer;
    static create(paramarg0: File, paramarg1: TailerListener, paramarg2: number, paramarg3: boolean, paramarg4: boolean, paramarg5: number): Tailer;
    static create(paramarg0: File, paramarg1: TailerListener, paramarg2: number, paramarg3: boolean, paramarg4: number): Tailer;
    constructor(arg0: File, arg1: Charset, arg2: TailerListener, arg3: number, arg4: boolean, arg5: boolean, arg6: number)
    constructor(arg0: File, arg1: TailerListener)
    constructor(arg0: File, arg1: TailerListener, arg2: number)
    constructor(arg0: File, arg1: TailerListener, arg2: number, arg3: boolean)
    constructor(arg0: File, arg1: TailerListener, arg2: number, arg3: boolean, arg4: boolean)
    constructor(arg0: File, arg1: TailerListener, arg2: number, arg3: boolean, arg4: boolean, arg5: number)
    constructor(arg0: File, arg1: TailerListener, arg2: number, arg3: boolean, arg4: number)
    // private charset: Charset;
    readonly delayDuration: Duration;
    // private ignoreTouch: boolean;
    // private inbuf: number[];
    // private listener: TailerListener;
    // private reOpen: boolean;
    // private run: boolean;
    // private tailFromEnd: boolean;
    readonly tailable: Tailer$Tailable;
    close(): void;
    getDelay(): number;
    getDelayDuration(): Duration;
    getFile(): File;
    getRun(): boolean;
    getTailable(): Tailer$Tailable;
    // private readLines(arg0: Tailer$RandomAccessResourceBridge): number;
    run(): void;
    stop(): void;
}