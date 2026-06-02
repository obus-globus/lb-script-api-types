import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { PrivilegedAction } from '../../../../../java/security/PrivilegedAction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoaderUtil$ThreadContextClassLoaderGetter extends Object implements PrivilegedAction<ClassLoader> {
    private constructor()
    run(): ClassLoader;
}