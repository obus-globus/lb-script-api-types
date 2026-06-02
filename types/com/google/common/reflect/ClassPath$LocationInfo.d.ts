import type { ImmutableSet$Builder } from '../../../../com/google/common/collect/ImmutableSet$Builder.d.ts'
import type { ClassPath$ResourceInfo } from '../../../../com/google/common/reflect/ClassPath$ResourceInfo.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { JarFile } from '../../../../java/util/jar/JarFile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassPath$LocationInfo extends Object {
    constructor(home: File, classloader: ClassLoader)
    // private classloader: ClassLoader;
    // private home: File;
    equals(obj: Object | null): boolean;
    file(): File;
    hashCode(): number;
    // private scan(file: File, scannedUris: File[], builder: ImmutableSet$Builder<ClassPath$ResourceInfo>): void;
    // private scanDirectory(directory: File, builder: ImmutableSet$Builder<ClassPath$ResourceInfo>): void;
    // private scanDirectory(directory: File, packagePrefix: string, currentPath: File[], builder: ImmutableSet$Builder<ClassPath$ResourceInfo>): void;
    // private scanJar(file: File, scannedUris: File[], builder: ImmutableSet$Builder<ClassPath$ResourceInfo>): void;
    // private scanJarFile(file: JarFile, builder: ImmutableSet$Builder<ClassPath$ResourceInfo>): void;
    scanResources(): ClassPath$ResourceInfo[];
    scanResources(scannedFiles: File[]): ClassPath$ResourceInfo[];
    toString(): string;
}