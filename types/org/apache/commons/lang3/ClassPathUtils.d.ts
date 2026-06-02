import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Package } from '../../../../java/lang/Package.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassPathUtils extends Object {
    static packageToPath(paramarg0: string): string;
    static pathToPackage(paramarg0: string): string;
    static toFullyQualifiedName(paramarg0: Class<Object>, paramarg1: string): string;
    static toFullyQualifiedName(paramarg0: Package, paramarg1: string): string;
    static toFullyQualifiedPath(paramarg0: Class<Object>, paramarg1: string): string;
    static toFullyQualifiedPath(paramarg0: Package, paramarg1: string): string;
    constructor()
}