import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Flushable } from '../../java/io/Flushable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { FileObject } from '../../javax/tools/FileObject.d.ts'
import type { JavaFileManager$Location } from '../../javax/tools/JavaFileManager$Location.d.ts'
import type { JavaFileObject } from '../../javax/tools/JavaFileObject.d.ts'
import type { JavaFileObject$Kind } from '../../javax/tools/JavaFileObject$Kind.d.ts'
import type { OptionChecker } from '../../javax/tools/OptionChecker.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface JavaFileManager extends Closeable, Flushable, OptionChecker, Object{
    close(): void;
    contains(arg0: JavaFileManager$Location, arg1: FileObject): boolean;
    flush(): void;
    getClassLoader(arg0: JavaFileManager$Location): ClassLoader;
    getFileForInput(arg0: JavaFileManager$Location, arg1: string, arg2: string): FileObject;
    getFileForOutput(arg0: JavaFileManager$Location, arg1: string, arg2: string, arg3: FileObject): FileObject;
    getFileForOutputForOriginatingFiles(arg0: JavaFileManager$Location, arg1: string, arg2: string, ...arg3: FileObject[]): FileObject;
    getJavaFileForInput(arg0: JavaFileManager$Location, arg1: string, arg2: JavaFileObject$Kind): JavaFileObject;
    getJavaFileForOutput(arg0: JavaFileManager$Location, arg1: string, arg2: JavaFileObject$Kind, arg3: FileObject): JavaFileObject;
    getJavaFileForOutputForOriginatingFiles(arg0: JavaFileManager$Location, arg1: string, arg2: JavaFileObject$Kind, ...arg3: FileObject[]): JavaFileObject;
    getLocationForModule(arg0: JavaFileManager$Location, arg1: JavaFileObject): JavaFileManager$Location;
    getLocationForModule(arg0: JavaFileManager$Location, arg1: string): JavaFileManager$Location;
    getServiceLoader<S extends unknown>(arg0: JavaFileManager$Location, arg1: Class<S>): S[];
    handleOption(arg0: string, arg1: Iterator<string>): boolean;
    hasLocation(arg0: JavaFileManager$Location): boolean;
    inferBinaryName(arg0: JavaFileManager$Location, arg1: JavaFileObject): string;
    inferModuleName(arg0: JavaFileManager$Location): string;
    isSameFile(arg0: FileObject, arg1: FileObject): boolean;
    isSupportedOption(arg0: string): number;
    list(arg0: JavaFileManager$Location, arg1: string, arg2: JavaFileObject$Kind[], arg3: boolean): JavaFileObject[];
    listLocationsForModules(arg0: JavaFileManager$Location): JavaFileManager$Location[][];
}