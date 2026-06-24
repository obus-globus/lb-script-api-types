import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
export class Visibilities extends Object {
    static INSTANCE: Visibilities;
    private constructor()
    compareLocal$org_jetbrains_kotlin_compiler_common(arg0: Visibility, arg1: Visibility): number;
    isPrivate(arg0: Visibility): boolean;
}