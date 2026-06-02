import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinVersion } from '../../../../../../../kotlin/KotlinVersion.d.ts'
import type { Jsr305Settings } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/Jsr305Settings.d.ts'
import type { NullabilityAnnotationStates } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/NullabilityAnnotationStates.d.ts'
import type { ReportLevel } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class JavaNullabilityAnnotationSettingsKt extends Object {
    static getDefaultJsr305Settings(paramarg0: KotlinVersion): Jsr305Settings;
    static getDefaultMigrationJsr305ReportLevelForGivenGlobal(paramarg0: ReportLevel): ReportLevel;
    static getDefaultReportLevelForAnnotation(paramarg0: FqName, paramarg1: KotlinVersion): ReportLevel;
    static getJSPECIFY_ANNOTATIONS_PACKAGE(): FqName;
    static getRXJAVA3_ANNOTATIONS(): (Object | null)[];
    static getReportLevelForAnnotation(paramarg0: FqName, paramarg1: NullabilityAnnotationStates<Object>, paramarg2: KotlinVersion): ReportLevel;
}