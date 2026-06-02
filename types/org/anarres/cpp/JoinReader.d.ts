import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Preprocessor } from '../../../org/anarres/cpp/Preprocessor.d.ts'
import type { PreprocessorListener } from '../../../org/anarres/cpp/PreprocessorListener.d.ts'
export class JoinReader extends Object implements Closeable {
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: boolean)
    // private flushnl: boolean;
    // private in: Reader;
    // private listener: PreprocessorListener;
    // private newlines: number;
    // private source: (Object | null)[];
    // private trigraphs: boolean;
    // private unget: number[];
    // private uptr: number;
    // private warnings: boolean;
    // private __read(): number;
    // private _read(): number;
    // private _unread(arg0: number): void;
    close(): void;
    init(arg0: Preprocessor, arg1: (Object | null)[]): void;
    read(): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    setTrigraphs(arg0: boolean, arg1: boolean): void;
    toString(): string;
    // private trigraph(arg0: string, arg1: string): string;
    warning(arg0: string): void;
}