import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PackagePartProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/PackagePartProvider.d.ts'
export class PackagePartProvider$Empty extends Object implements PackagePartProvider {
    static INSTANCE: PackagePartProvider$Empty;
    private constructor()
    findPackageParts(arg0: string): string[];
}