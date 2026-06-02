import type { Function } from '../../../com/sun/jna/Function.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { SymbolProvider } from '../../../com/sun/jna/SymbolProvider.d.ts'
import type { Cleaner$Cleanable } from '../../../com/sun/jna/internal/Cleaner$Cleanable.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NativeLibrary extends Object implements Closeable {
    static addSearchPath(paramarg0: string, paramarg1: string): void;
    static getInstance(paramarg0: string): NativeLibrary;
    static getInstance(paramarg0: string, paramarg1: ClassLoader): NativeLibrary;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: Object | null }): NativeLibrary;
    static getProcess(): NativeLibrary;
    static getProcess(paramarg0: { [key: string]: Object | null }): NativeLibrary;
    private constructor(arg0: string, arg1: string, arg2: number, arg3: { [key: string]: Object | null })
    // private callFlags: number;
    // private cleanable: Cleaner$Cleanable;
    // private encoding: string;
    // private functions: { [key: string]: Function };
    // private handle: number;
    // private libraryName: string;
    // private libraryPath: string;
    readonly options: { [key: string]: Object | null };
    // private symbolProvider: SymbolProvider;
    close(): void;
    dispose(): void;
    getFile(): File;
    getFunction(arg0: string): Function;
    getFunction(arg0: string, arg1: Method): Function;
    getFunction(arg0: string, arg1: number): Function;
    getFunction(arg0: string, arg1: number, arg2: string): Function;
    getGlobalVariableAddress(arg0: string): Pointer;
    // private getLibraryName(arg0: string): string;
    getName(): string;
    getOptions(): { [key: string]: Object | null };
    getSymbolAddress(arg0: string): number;
    toString(): string;
}