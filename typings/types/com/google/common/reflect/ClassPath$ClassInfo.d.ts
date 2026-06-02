import type { ClassPath$ResourceInfo } from '../../../../com/google/common/reflect/ClassPath$ResourceInfo.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassPath$ClassInfo extends ClassPath$ResourceInfo {
    constructor(file: File, resourceName: string, loader: ClassLoader)
    // private className: string;
    getName(): string;
    getPackageName(): string;
    getSimpleName(): string;
    isTopLevel(): boolean;
    load(): Class<Object>;
    toString(): string;
}