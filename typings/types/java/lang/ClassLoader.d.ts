import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Module } from '../../java/lang/Module.d.ts'
import type { NamedPackage } from '../../java/lang/NamedPackage.d.ts'
import type { Package } from '../../java/lang/Package.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { CodeSource } from '../../java/security/CodeSource.d.ts'
import type { ProtectionDomain } from '../../java/security/ProtectionDomain.d.ts'
import type { Certificate } from '../../java/security/cert/Certificate.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ClassLoader extends Object {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    constructor()
    constructor(arg0: ClassLoader)
    constructor(arg0: string, arg1: ClassLoader)
    addClass(arg0: Class<Object>): void;
    // private checkCerts(arg0: string, arg1: CodeSource): void;
    clearAssertionStatus(): void;
    // private compareCerts(arg0: Certificate[], arg1: Certificate[]): boolean;
    createOrGetClassLoaderValueMap(): Map<Object | null, Object | null>;
    defineClass(arg0: number[], arg1: number, arg2: number): Class<Object>;
    defineClass(arg0: string, arg1: ByteBuffer, arg2: ProtectionDomain): Class<Object>;
    defineClass(arg0: string, arg1: number[], arg2: number, arg3: number): Class<Object>;
    defineClass(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: ProtectionDomain): Class<Object>;
    // private defineClassSourceLocation(arg0: ProtectionDomain): string;
    definePackage(arg0: Class<Object>): Package;
    definePackage(arg0: string, arg1: Module): Package;
    definePackage(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: URL): Package;
    desiredAssertionStatus(arg0: string): boolean;
    findClass(arg0: string): Class<Object>;
    findClass(arg0: string, arg1: string): Class<Object>;
    findLibrary(arg0: string): string;
    findLoadedClass(arg0: string): Class<Object>;
    // private findLoadedClass0(arg0: string): Class<Object>;
    findResource(arg0: string): URL;
    findResource(arg0: string, arg1: string): URL;
    findResources(arg0: string): Enumeration<URL>;
    findSystemClass(arg0: string): Class<Object>;
    getClassLoadingLock(arg0: string): Object;
    getDefinedPackage(arg0: string): Package;
    getDefinedPackages(): Package[];
    getName(): string;
    // private getNamedPackage(arg0: string, arg1: Module): NamedPackage;
    getPackage(arg0: string): Package;
    getPackages(): Package[];
    getParent(): ClassLoader;
    getResource(arg0: string): URL;
    // private getResourceAsByteArray(arg0: string): number[];
    getResourceAsStream(arg0: string): InputStream;
    getResources(arg0: string): Enumeration<URL>;
    getUnnamedModule(): Module;
    // private initializeJavaAssertionMaps(): void;
    isRegisteredAsParallelCapable(): boolean;
    loadClass(arg0: Module, arg1: string): Class<Object>;
    loadClass(arg0: string): Class<Object>;
    loadClass(arg0: string, arg1: boolean): Class<Object>;
    name(): string;
    nameAndId(): string;
    packages(): Stream<Package>;
    // private postDefineClass(arg0: Class<Object>, arg1: ProtectionDomain): void;
    // private preDefineClass(arg0: string, arg1: ProtectionDomain): ProtectionDomain;
    // private reinitObjectField(arg0: string, arg1: Object): void;
    // private resetArchivedStates(): void;
    resolveClass(arg0: Class<Object>): void;
    resources(arg0: string): Stream<URL>;
    setClassAssertionStatus(arg0: string, arg1: boolean): void;
    setDefaultAssertionStatus(arg0: boolean): void;
    setPackageAssertionStatus(arg0: string, arg1: boolean): void;
    setSigners(arg0: Class<Object>, arg1: Object[]): void;
    // private toPackage(arg0: string, arg1: NamedPackage, arg2: Module): Package;
    // private trySetObjectField(arg0: string, arg1: Object): boolean;
}