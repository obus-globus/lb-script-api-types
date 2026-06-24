import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinVersion } from '../../../../../../../kotlin/KotlinVersion.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { JavaNullabilityAnnotationsStatus$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaNullabilityAnnotationsStatus$Companion.d.ts'
import type { ReportLevel } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel.d.ts'
export class JavaNullabilityAnnotationsStatus extends Object {
    static Companion: JavaNullabilityAnnotationsStatus$Companion;
    constructor(arg0: ReportLevel, arg1: KotlinVersion, arg2: ReportLevel)
    constructor(arg0: ReportLevel, arg1: KotlinVersion, arg2: ReportLevel, arg3: number, arg4: DefaultConstructorMarker)
    readonly reportLevelAfter: ReportLevel;
    readonly reportLevelBefore: ReportLevel;
    readonly sinceVersion: KotlinVersion;
    equals(arg0: Object | null): boolean;
    getReportLevelAfter(): ReportLevel;
    getReportLevelBefore(): ReportLevel;
    getSinceVersion(): KotlinVersion;
    hashCode(): number;
    toString(): string;
}