import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ForkProxy } from '../../../../org/apache/tika/fork/ForkProxy.d.ts'
export class ClassLoaderProxy extends ClassLoader implements ForkProxy {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    constructor(arg0: number)
    // private input: DataInputStream;
    // private notFound: string[];
    // private output: DataOutputStream;
    // private resource: number;
    // private definePackageIfNecessary(arg0: string, arg1: Class<Object>): void;
    findClass(arg0: string): Class<Object>;
    findClass(arg0: string, arg1: string): Class<Object>;
    findResource(arg0: string): URL;
    findResource(arg0: string, arg1: string): URL;
    findResources(arg0: string): Enumeration<URL>;
    init(arg0: DataInputStream, arg1: DataOutputStream): void;
    // private readStream(): number[];
    // private toPackageName(arg0: string): string;
}