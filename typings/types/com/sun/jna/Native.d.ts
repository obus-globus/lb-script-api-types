import type { Callback } from '../../../com/sun/jna/Callback.d.ts'
import type { Callback$UncaughtExceptionHandler } from '../../../com/sun/jna/Callback$UncaughtExceptionHandler.d.ts'
import type { CallbackThreadInitializer } from '../../../com/sun/jna/CallbackThreadInitializer.d.ts'
import type { Library } from '../../../com/sun/jna/Library.d.ts'
import type { Native$ffi_callback } from '../../../com/sun/jna/Native$ffi_callback.d.ts'
import type { NativeLibrary } from '../../../com/sun/jna/NativeLibrary.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { TypeMapper } from '../../../com/sun/jna/TypeMapper.d.ts'
import type { Version } from '../../../com/sun/jna/Version.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { Window } from '../../../java/awt/Window.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Buffer } from '../../../java/nio/Buffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Native extends Object implements Version {
    static BOOL_SIZE: number;
    static DEBUG_JNA_LOAD: boolean;
    static DEBUG_LOAD: boolean;
    static DEFAULT_CHARSET: Charset;
    static DEFAULT_ENCODING: string;
    static LONG_DOUBLE_SIZE: number;
    static LONG_SIZE: number;
    static POINTER_SIZE: number;
    static SIZE_T_SIZE: number;
    static VERSION: string;
    static VERSION_NATIVE: string;
    static WCHAR_SIZE: number;
    static detach(paramarg0: boolean): void;
    static extractFromResourcePath(paramarg0: string): File;
    static extractFromResourcePath(paramarg0: string, paramarg1: ClassLoader): File;
    static ffi_call(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static ffi_free_closure(paramarg0: number): void;
    static ffi_prep_cif(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static ffi_prep_closure(paramarg0: number, paramarg1: Native$ffi_callback): number;
    static free(paramarg0: number): void;
    static getCallbackExceptionHandler(): Callback$UncaughtExceptionHandler;
    static getComponentID(paramarg0: Component): number;
    static getComponentPointer(paramarg0: Component): Pointer;
    static getDefaultStringEncoding(): string;
    static getDirectBufferPointer(paramarg0: Buffer): Pointer;
    static getLastError(): number;
    static getLibraryOptions(paramarg0: Class<Object>): { [key: string]: Object };
    static getNativeLibrary(paramarg0: Library): NativeLibrary;
    static getNativeLibrary(paramarg0: Class<Object>): NativeLibrary;
    static getNativeSize(paramarg0: Class<Object>): number;
    static getNativeSize(paramarg0: Class<Object>, paramarg1: Object): number;
    static getStringEncoding(paramarg0: Class<Object>): string;
    static getStructureAlignment(paramarg0: Class<Object>): number;
    static getTypeMapper(paramarg0: Class<Object>): TypeMapper;
    static getWebStartLibraryPath(paramarg0: string): string;
    static getWindowID(paramarg0: Window): number;
    static getWindowPointer(paramarg0: Window): Pointer;
    static isProtected(): boolean;
    static isSupportedNativeType(paramarg0: Class<Object>): boolean;
    static load<T extends Library>(paramarg0: Class<T>): T;
    static load<T extends Library>(paramarg0: Class<T>, paramarg1: { [key: string]: Object }): T;
    static load<T extends Library>(paramarg0: string, paramarg1: Class<T>): T;
    static load<T extends Library>(paramarg0: string, paramarg1: Class<T>, paramarg2: { [key: string]: Object }): T;
    static loadLibrary<T extends unknown>(paramarg0: Class<T>): T;
    static loadLibrary<T extends unknown>(paramarg0: Class<T>, paramarg1: { [key: string]: Object }): T;
    static loadLibrary<T extends unknown>(paramarg0: string, paramarg1: Class<T>): T;
    static loadLibrary<T extends unknown>(paramarg0: string, paramarg1: Class<T>, paramarg2: { [key: string]: Object }): T;
    static main(paramarg0: string[]): void;
    static malloc(paramarg0: number): number;
    static register(paramarg0: NativeLibrary): void;
    static register(paramarg0: Class<Object>, paramarg1: NativeLibrary): void;
    static register(paramarg0: Class<Object>, paramarg1: string): void;
    static register(paramarg0: string): void;
    static registered(paramarg0: Class<Object>): boolean;
    static setCallbackExceptionHandler(paramarg0: Callback$UncaughtExceptionHandler): void;
    static setCallbackThreadInitializer(paramarg0: Callback, paramarg1: CallbackThreadInitializer): void;
    static setLastError(paramarg0: number): void;
    static setProtected(paramarg0: boolean): void;
    static synchronizedLibrary(paramarg0: Library): Library;
    static toByteArray(paramarg0: string): number[];
    static toByteArray(paramarg0: string, paramarg1: string): number[];
    static toByteArray(paramarg0: string, paramarg1: Charset): number[];
    static toCharArray(paramarg0: string): string[];
    static toString(paramarg0: number[]): string;
    static toString(paramarg0: number[], paramarg1: string): string;
    static toString(paramarg0: number[], paramarg1: Charset): string;
    static toString(paramarg0: string[]): string;
    static toStringList(paramarg0: string[]): string[];
    static toStringList(paramarg0: string[], paramarg1: number, paramarg2: number): string[];
    static unregister(): void;
    static unregister(paramarg0: Class<Object>): void;
    private constructor()
}