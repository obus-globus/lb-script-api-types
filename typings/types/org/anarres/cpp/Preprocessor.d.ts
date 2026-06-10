import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Feature } from '../../../org/anarres/cpp/Feature.d.ts'
import type { Macro } from '../../../org/anarres/cpp/Macro.d.ts'
import type { PreprocessorListener } from '../../../org/anarres/cpp/PreprocessorListener.d.ts'
import type { State } from '../../../org/anarres/cpp/State.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
import type { VirtualFileSystem } from '../../../org/anarres/cpp/VirtualFileSystem.d.ts'
import type { Warning } from '../../../org/anarres/cpp/Warning.d.ts'
export class Preprocessor extends Object implements Closeable {
    constructor()
    constructor(arg0: File)
    constructor(arg0: Token[])
    // private counter: number;
    // private expr_token: Token;
    readonly features: Feature[];
    // private filesystem: VirtualFileSystem;
    // private frameworkspath: string[];
    readonly includes: VirtualFile[];
    // private inputs: Token[][];
    readonly listener: PreprocessorListener;
    readonly macros: { [key: string]: Macro };
    // private onceseenpaths: string[];
    // private quoteincludepath: string[];
    // private source: Token[];
    // private source_token: Token;
    // private states: State[];
    // private sysincludepath: string[];
    readonly warnings: Warning[];
    // private _token(): Token;
    addFeature(arg0: Feature): void;
    addFeatures(arg0: Feature[]): void;
    addInput(arg0: File): void;
    addInput(arg0: Token[]): void;
    addMacro(arg0: string): void;
    addMacro(arg0: string, arg1: string): void;
    addMacro(arg0: Macro): void;
    addWarning(arg0: Warning): void;
    addWarnings(arg0: Warning[]): void;
    close(): void;
    // private define(): Token;
    error(arg0: number, arg1: number, arg2: string): void;
    // private error(arg0: Token, arg1: boolean): void;
    error(arg0: Token, arg1: string): void;
    expand(arg0: Token[]): Token[];
    // private expanded_token(): Token;
    // private expanded_token_nonwhite(): Token;
    // private expr(arg0: number): number;
    // private expr_char(arg0: Token): number;
    // private expr_priority(arg0: Token): number;
    // private expr_token(): Token;
    // private expr_untoken(arg0: Token): void;
    getFeature(arg0: Feature): boolean;
    getFeatures(): Feature[];
    getFileSystem(): VirtualFileSystem;
    getFrameworksPath(): string[];
    getIncludes(): VirtualFile[];
    getListener(): PreprocessorListener;
    getMacro(arg0: string): Macro;
    getMacros(): { [key: string]: Macro };
    getQuoteIncludePath(): string[];
    getSource(): Token[];
    getSystemIncludePath(): string[];
    getWarning(arg0: Warning): boolean;
    getWarnings(): Warning[];
    // private include(arg0: boolean): Token;
    // private include(arg0: string, arg1: number, arg2: string, arg3: boolean, arg4: boolean): void;
    include(arg0: string[], arg1: string): boolean;
    include(arg0: VirtualFile): boolean;
    // private isActive(): boolean;
    // private isWhite(arg0: Token): boolean;
    // private line_token(arg0: number, arg1: string, arg2: string): Token;
    // private macro(arg0: Macro, arg1: Token): boolean;
    // private next_source(): Token;
    pop_source(): void;
    pop_source(arg0: boolean): Token;
    // private pop_state(): void;
    // private pragma(): Token;
    pragma(arg0: Token, arg1: Token[]): void;
    pragma_once(arg0: Token): void;
    push_source(arg0: Token[], arg1: boolean): void;
    // private push_state(): void;
    setFileSystem(arg0: VirtualFileSystem): void;
    setFrameworksPath(arg0: string[]): void;
    setListener(arg0: PreprocessorListener): void;
    setQuoteIncludePath(arg0: string[]): void;
    setSystemIncludePath(arg0: string[]): void;
    // private source_skipline(arg0: boolean): Token;
    // private source_token(): Token;
    // private source_token_nonwhite(): Token;
    // private source_untoken(arg0: Token): void;
    toString(): string;
    // private toWhitespace(arg0: Token): Token;
    token(): Token;
    // private token_nonwhite(): Token;
    // private undef(): Token;
    warning(arg0: number, arg1: number, arg2: string): void;
    warning(arg0: Token, arg1: string): void;
}