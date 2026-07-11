import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeLibraryLoader extends Object {
    static load(paramarg0: string, paramarg1: ClassLoader): void;
    static loadFirstAvailable(paramarg0: ClassLoader, ...paramarg1: (Object | null)[]): void;
    private constructor()
}