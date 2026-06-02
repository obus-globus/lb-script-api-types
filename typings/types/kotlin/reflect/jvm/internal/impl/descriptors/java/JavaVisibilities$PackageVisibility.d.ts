import type { Visibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
export class JavaVisibilities$PackageVisibility extends Visibility {
    static INSTANCE: JavaVisibilities$PackageVisibility;
    private constructor()
    compareTo(arg0: Visibility): number;
    getInternalDisplayName(): string;
    normalize(): Visibility;
}