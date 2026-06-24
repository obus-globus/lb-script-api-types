import type { VersionComparisonOperator$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { SemanticVersion } from '../../../../../../net/fabricmc/loader/api/SemanticVersion.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
export class VersionComparisonOperator extends Enum<VersionComparisonOperator> {
    static EQUAL: VersionComparisonOperator;
    static GREATER: VersionComparisonOperator;
    static GREATER_EQUAL: VersionComparisonOperator;
    static LESS: VersionComparisonOperator;
    static LESS_EQUAL: VersionComparisonOperator;
    static SAME_TO_NEXT_MAJOR: VersionComparisonOperator;
    static SAME_TO_NEXT_MINOR: VersionComparisonOperator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VersionComparisonOperator;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: boolean, arg4: boolean)
    constructor(arg2: string, arg3: boolean, arg4: boolean, arg5: VersionComparisonOperator$1)
    readonly maxInclusive: boolean;
    readonly minInclusive: boolean;
    readonly serialized: string;
    getSerialized(): string;
    isMaxInclusive(): boolean;
    isMinInclusive(): boolean;
    maxVersion(arg0: SemanticVersion): SemanticVersion;
    minVersion(arg0: SemanticVersion): SemanticVersion;
    test(arg0: SemanticVersion, arg1: SemanticVersion): boolean;
    test(arg0: Version, arg1: Version): boolean;
    name(): "GREATER_EQUAL" | "LESS_EQUAL" | "GREATER" | "LESS" | "EQUAL" | "SAME_TO_NEXT_MINOR" | "SAME_TO_NEXT_MAJOR";
}