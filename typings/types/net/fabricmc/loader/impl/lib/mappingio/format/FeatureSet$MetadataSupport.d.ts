import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FeatureSet$MetadataSupport extends Enum<FeatureSet$MetadataSupport> {
    static ARBITRARY: FeatureSet$MetadataSupport;
    static FIXED: FeatureSet$MetadataSupport;
    static NONE: FeatureSet$MetadataSupport;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FeatureSet$MetadataSupport;
    static values(): FeatureSet$MetadataSupport[];
    private constructor()
    name(): "NONE" | "FIXED" | "ARBITRARY";
}