import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../java/lang/Module.d.ts'
import type { NamedPackage } from '../../java/lang/NamedPackage.d.ts'
import type { Package$VersionInfo } from '../../java/lang/Package$VersionInfo.d.ts'
import type { AnnotatedElement } from '../../java/lang/reflect/AnnotatedElement.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Package extends NamedPackage implements AnnotatedElement {
    static getPackage(paramarg0: string): Package;
    static getPackages(): (Object | null)[];
    constructor(arg0: string, arg1: Module)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: URL, arg8: ClassLoader)
    // private packageInfo: Class<Object>;
    // private versionInfo: Package$VersionInfo;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotations(): Annotation[];
    getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
    getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getImplementationTitle(): string;
    getImplementationVendor(): string;
    getImplementationVersion(): string;
    getName(): string;
    // private getPackageInfo(): Class<Object>;
    getSpecificationTitle(): string;
    getSpecificationVendor(): string;
    getSpecificationVersion(): string;
    hashCode(): number;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    isCompatibleWith(arg0: string): boolean;
    isSealed(): boolean;
    isSealed(arg0: URL): boolean;
    toString(): string;
}