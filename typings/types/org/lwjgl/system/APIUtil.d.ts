import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { BiPredicate } from '../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { APIUtil$APIVersion } from '../../../org/lwjgl/system/APIUtil$APIVersion.d.ts'
import type { APIUtil$Encoder } from '../../../org/lwjgl/system/APIUtil$Encoder.d.ts'
import type { Configuration } from '../../../org/lwjgl/system/Configuration.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { SharedLibrary } from '../../../org/lwjgl/system/SharedLibrary.d.ts'
import type { FFICIF } from '../../../org/lwjgl/system/libffi/FFICIF.d.ts'
import type { FFIType } from '../../../org/lwjgl/system/libffi/FFIType.d.ts'
export class APIUtil extends Object {
    static DEBUG_STREAM: PrintStream;
    static apiArray(paramarg0: MemoryStack, ...paramarg1: ByteBuffer[]): number;
    static apiArray(paramarg0: MemoryStack, ...paramarg1: number[]): number;
    static apiArray(paramarg0: MemoryStack, paramarg1: APIUtil$Encoder, ...paramarg2: CharSequence[]): number;
    static apiArrayFree(paramarg0: number, paramarg1: number): void;
    static apiArrayi(paramarg0: MemoryStack, paramarg1: APIUtil$Encoder, ...paramarg2: CharSequence[]): number;
    static apiArrayp(paramarg0: MemoryStack, ...paramarg1: ByteBuffer[]): number;
    static apiArrayp(paramarg0: MemoryStack, paramarg1: APIUtil$Encoder, ...paramarg2: CharSequence[]): number;
    static apiCheckAllocation(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static apiClassTokens(paramarg0: (param0: Field, param1: number) => boolean, paramarg1: { [key: number]: string }, ...paramarg2: Class<Object>[]): { [key: number]: string };
    static apiClosureRet(paramarg0: number, paramarg1: boolean): void;
    static apiClosureRet(paramarg0: number, paramarg1: number): void;
    static apiClosureRetL(paramarg0: number, paramarg1: number): void;
    static apiClosureRetP(paramarg0: number, paramarg1: number): void;
    static apiCreateArray(paramarg0: FFIType, paramarg1: number): FFIType;
    static apiCreateCIF(paramarg0: number, paramarg1: FFIType, ...paramarg2: FFIType[]): FFICIF;
    static apiCreateCIF(paramarg0: FFIType, ...paramarg1: FFIType[]): FFICIF;
    static apiCreateCIFVar(paramarg0: number, paramarg1: number, paramarg2: FFIType, ...paramarg3: FFIType[]): FFICIF;
    static apiCreateCIFVar(paramarg0: number, paramarg1: FFIType, ...paramarg2: FFIType[]): FFICIF;
    static apiCreateLibrary(paramarg0: string): SharedLibrary;
    static apiCreateStruct(...paramarg0: FFIType[]): FFIType;
    static apiCreateUnion(...paramarg0: FFIType[]): FFIType;
    static apiFilterExtensions(paramarg0: string[], paramarg1: Configuration<Object>): void;
    static apiFindLibrary(paramarg0: string, paramarg1: string): string;
    static apiGetBytes(paramarg0: number, paramarg1: number): number;
    static apiGetFunctionAddress(paramarg0: (param0: ByteBuffer) => number, paramarg1: string): number;
    static apiGetFunctionAddressOptional(paramarg0: SharedLibrary, paramarg1: string): number;
    static apiGetMappedBuffer(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): ByteBuffer;
    static apiLog(paramarg0: CharSequence): void;
    static apiLogMissing(paramarg0: string, paramarg1: ByteBuffer): void;
    static apiLogMore(paramarg0: CharSequence): void;
    static apiParseVersion(paramarg0: string): APIUtil$APIVersion;
    static apiParseVersion(paramarg0: Configuration<Object>): APIUtil$APIVersion;
    static apiStdcall(): number;
    static apiUnknownToken(paramarg0: number): string;
    static apiUnknownToken(paramarg0: string, paramarg1: number): string;
    private constructor()
}