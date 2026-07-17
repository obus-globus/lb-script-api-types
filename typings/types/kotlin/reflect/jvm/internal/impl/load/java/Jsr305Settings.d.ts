import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { ReportLevel } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class Jsr305Settings extends Object {
    constructor(arg0: ReportLevel, arg1: ReportLevel, arg2: JavaMap<FqName, ReportLevel>)
    // private description$delegate: Lazy<Object>;
    readonly globalLevel: ReportLevel;
    // private isDisabled: boolean;
    readonly migrationLevel: ReportLevel;
    readonly userDefinedLevelForSpecificAnnotation: JavaMap<FqName, ReportLevel>;
    equals(arg0: Object | null): boolean;
    getGlobalLevel(): ReportLevel;
    getMigrationLevel(): ReportLevel;
    getUserDefinedLevelForSpecificAnnotation(): JavaMap<FqName, ReportLevel>;
    hashCode(): number;
    isDisabled(): boolean;
    toString(): string;
}