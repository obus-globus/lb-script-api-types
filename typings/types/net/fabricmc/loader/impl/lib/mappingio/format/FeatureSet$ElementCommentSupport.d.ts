import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FeatureSet$ElementCommentSupport extends Enum<FeatureSet$ElementCommentSupport> {
    static NAMESPACED: FeatureSet$ElementCommentSupport;
    static NONE: FeatureSet$ElementCommentSupport;
    static SHARED: FeatureSet$ElementCommentSupport;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FeatureSet$ElementCommentSupport;
    static values(): FeatureSet$ElementCommentSupport[];
    private constructor()
    name(): "NAMESPACED" | "SHARED" | "NONE";
}