import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../../../java/net/URL.d.ts'
import type { JarInputStream } from '../../../../../../../../java/util/jar/JarInputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ResolverUtil$Test } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/ResolverUtil$Test.d.ts'
export class ResolverUtil extends Object {
    constructor()
    // private classMatches: Class<Object>[];
    // private classloader: ClassLoader;
    // private resourceMatches: URI[];
    addIfMatching(test: ResolverUtil$Test, fqn: string): void;
    // private close(jarStream: JarInputStream, source: Object): void;
    extractPath(url: URL): string;
    find(test: ResolverUtil$Test, packageNames: string[]): void;
    findInPackage(test: ResolverUtil$Test, packageName: string): void;
    getClassLoader(): ClassLoader;
    getClasses(): Class<Object>[];
    getResources(): URI[];
    // private isTestApplicable(test: ResolverUtil$Test, path: string): boolean;
    // private loadImplementationsInBundle(test: ResolverUtil$Test, packageName: string): void;
    // private loadImplementationsInDirectory(test: ResolverUtil$Test, parent: string, location: File): void;
    // private loadImplementationsInJar(test: ResolverUtil$Test, parent: string, jarFile: File): void;
    // private loadImplementationsInJar(test: ResolverUtil$Test, parent: string, url: URL): void;
    // private loadImplementationsInJar(test: ResolverUtil$Test, parent: string, path: string, stream: JarInputStream): void;
    setClassLoader(aClassloader: ClassLoader): void;
}