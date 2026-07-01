import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { SimpleFileVisitor } from '../../../../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMappingProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider.d.ts'
import type { IMappingProvider$MappingAcceptor } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider$MappingAcceptor.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
import type { TinyRemapper$AnalyzeVisitorProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$AnalyzeVisitorProvider.d.ts'
import type { TinyRemapper$ApplyVisitorProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$ApplyVisitorProvider.d.ts'
import type { TinyRemapper$Extension } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$Extension.d.ts'
import type { TinyRemapper$LinkedMethodPropagation } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$LinkedMethodPropagation.d.ts'
import type { TinyRemapper$StateProcessor } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$StateProcessor.d.ts'
import type { TrLogger } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { Remapper } from '../../../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class TinyRemapper$Builder extends Object {
    constructor(arg0: TrLogger, arg1: SimpleFileVisitor<Path[]>)
    // private analyzeVisitors: TinyRemapper$AnalyzeVisitorProvider[];
    // private checkPackageAccess: boolean;
    // private disableLocalVariableTracking: boolean;
    // private extraRemapper: Remapper;
    // private fixPackageAccess: boolean;
    // private forcePropagation: string[];
    // private ignoreConflicts: boolean;
    // private ignoreFieldDesc: boolean;
    // private inferNameFromSameLvIndex: boolean;
    // private invalidLvNamePattern: Pattern;
    // private keepInputData: boolean;
    // private knownIndyBsm: string[];
    // private logger: TrLogger;
    // private mappingProviders: (param0: IMappingProvider$MappingAcceptor) => void[];
    // private postApplyVisitors: TinyRemapper$ApplyVisitorProvider[];
    // private preApplyVisitors: TinyRemapper$ApplyVisitorProvider[];
    // private propagateBridges: TinyRemapper$LinkedMethodPropagation;
    // private propagatePrivate: boolean;
    // private propagateRecordComponents: TinyRemapper$LinkedMethodPropagation;
    // private rebuildSourceFilenames: boolean;
    // private removeFrames: boolean;
    // private renameInvalidLocals: boolean;
    // private resolveMissing: boolean;
    // private skipLocalMapping: boolean;
    // private stateProcessors: TinyRemapper$StateProcessor[];
    // private threadCount: number;
    build(): TinyRemapper;
    extension(arg0: TinyRemapper$Extension): TinyRemapper$Builder;
    extraAnalyzeVisitor(arg0: TinyRemapper$AnalyzeVisitorProvider): TinyRemapper$Builder;
    extraPreApplyVisitor(arg0: TinyRemapper$ApplyVisitorProvider): TinyRemapper$Builder;
    extraStateProcessor(arg0: TinyRemapper$StateProcessor): TinyRemapper$Builder;
    rebuildSourceFilenames(arg0: boolean): TinyRemapper$Builder;
    renameInvalidLocals(arg0: boolean): TinyRemapper$Builder;
    withMappings(arg0: (param0: IMappingProvider$MappingAcceptor) => void): TinyRemapper$Builder;
}