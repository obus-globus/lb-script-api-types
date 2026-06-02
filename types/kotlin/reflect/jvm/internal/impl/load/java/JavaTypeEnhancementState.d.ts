import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { JavaTypeEnhancementState$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeEnhancementState$Companion.d.ts'
import type { Jsr305Settings } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/Jsr305Settings.d.ts'
import type { ReportLevel } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class JavaTypeEnhancementState extends Object {
    static Companion: JavaTypeEnhancementState$Companion;
    constructor(arg0: Jsr305Settings, arg1: Function1<FqName, ReportLevel>)
    readonly disabledDefaultAnnotations: boolean;
    readonly getReportLevelForAnnotation: (param0: FqName) => ReportLevel;
    readonly jsr305: Jsr305Settings;
    getDisabledDefaultAnnotations(): boolean;
    getGetReportLevelForAnnotation(): Function1<FqName, ReportLevel>;
    getJsr305(): Jsr305Settings;
    toString(): string;
}