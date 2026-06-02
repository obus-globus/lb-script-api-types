import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FeatureSet$ElementCommentSupport extends Enum<FeatureSet$ElementCommentSupport> {
    static NAMESPACED: FeatureSet$ElementCommentSupport;
    static NONE: FeatureSet$ElementCommentSupport;
    static SHARED: FeatureSet$ElementCommentSupport;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FeatureSet$ElementCommentSupport;
    static values(): (Object | null)[];
    private constructor()
    name(): "NAMESPACED" | "SHARED" | "NONE";
}