import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { ProtectionDomain } from '../../../java/security/ProtectionDomain.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassLoaders extends Object {
    static addToSystemClassPath(paramarg0: URL): void;
    static defineAnonymousClass(paramarg0: Class<Object>, paramarg1: number[], ...paramarg2: (Object | null)[]): Class<Object>;
    static defineClass(paramarg0: ClassLoader, paramarg1: string, paramarg2: number[]): Class<Object>;
    static defineClass(paramarg0: ClassLoader, paramarg1: string, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: ProtectionDomain): Class<Object>;
    static defineClass(paramarg0: ClassLoader, paramarg1: string, paramarg2: number[], paramarg3: ProtectionDomain): Class<Object>;
    static getSystemClassPath(): (Object | null)[];
    static loadToFront(paramarg0: ClassLoader, paramarg1: URL): void;
    static loadToFront(paramarg0: URL): void;
    constructor()
}