import type { ClassPath$ClassInfo } from '../../../../com/google/common/reflect/ClassPath$ClassInfo.d.ts'
import type { ClassPath$ResourceInfo } from '../../../../com/google/common/reflect/ClassPath$ResourceInfo.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassPath extends Object {
    static from(paramclassloader: ClassLoader): ClassPath;
    private constructor(resources: ClassPath$ResourceInfo[])
    readonly resources: ClassPath$ResourceInfo[];
    getAllClasses(): ClassPath$ClassInfo[];
    getResources(): ClassPath$ResourceInfo[];
    getTopLevelClasses(): ClassPath$ClassInfo[];
    getTopLevelClasses(packageName: string): ClassPath$ClassInfo[];
    getTopLevelClassesRecursive(packageName: string): ClassPath$ClassInfo[];
}