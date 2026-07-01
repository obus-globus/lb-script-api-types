import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { SimpleFileVisitor } from '../../../../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { AtomicReference } from '../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/ClassInstance.d.ts'
import type { FileSystemReference } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/FileSystemReference.d.ts'
import type { IMappingProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider.d.ts'
import type { IMappingProvider$MappingAcceptor } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider$MappingAcceptor.d.ts'
import type { InputTag } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/InputTag.d.ts'
import type { MemberInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/MemberInstance.d.ts'
import type { TinyRemapper$AnalyzeVisitorProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$AnalyzeVisitorProvider.d.ts'
import type { TinyRemapper$ApplyVisitorProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$ApplyVisitorProvider.d.ts'
import type { TinyRemapper$Builder } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$Builder.d.ts'
import type { TinyRemapper$LinkedMethodPropagation } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$LinkedMethodPropagation.d.ts'
import type { TinyRemapper$MrjState } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$MrjState.d.ts'
import type { TinyRemapper$StateProcessor } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$StateProcessor.d.ts'
import type { TrEnvironment } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { TrLogger } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { Remapper } from '../../../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class TinyRemapper extends Object {
    static newRemapper(paramarg0: TrLogger): TinyRemapper$Builder;
    constructor(arg0: (Object | null)[], arg1: boolean, arg2: number, arg3: boolean, arg4: (Object | null)[], arg5: (Object | null)[], arg6: boolean, arg7: TinyRemapper$LinkedMethodPropagation, arg8: TinyRemapper$LinkedMethodPropagation, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: boolean, arg17: Pattern, arg18: boolean, arg19: boolean, arg20: (Object | null)[], arg21: (Object | null)[], arg22: (Object | null)[], arg23: (Object | null)[], arg24: Remapper, arg25: TrLogger, arg26: SimpleFileVisitor<Path[]>)
    // private analyzeVisitors: TinyRemapper$AnalyzeVisitorProvider[];
    // private check: boolean;
    // private checkPackageAccess: boolean;
    // private classMap: { [key: string]: string };
    // private classesToMakePublic: ClassInstance[];
    // private conflicts: Map<MemberInstance, string[]>;
    // private defaultState: TinyRemapper$MrjState;
    // private dirty: boolean;
    // private disableLocalVariableTracking: boolean;
    // private extraRemapper: Remapper;
    // private fieldMap: { [key: string]: string };
    // private fixPackageAccess: boolean;
    // private forcePropagation: string[];
    // private ignoreConflicts: boolean;
    // private ignoreFieldDesc: boolean;
    // private inferNameFromSameLvIndex: boolean;
    // private invalidLvNamePattern: Pattern;
    // private keepInputData: boolean;
    // private knownIndyBsm: string[];
    readonly logger: TrLogger;
    // private mappingProviders: (param0: IMappingProvider$MappingAcceptor) => void[];
    // private membersToMakePublic: MemberInstance[];
    // private methodArgMap: { [key: string]: string };
    // private methodMap: { [key: string]: string };
    // private methodVarMap: { [key: string]: string };
    // private mrjStates: { [key: number]: TinyRemapper$MrjState };
    // private outputBuffer: Map<ClassInstance, number[]>;
    // private pendingReads: CompletableFuture<Object>[];
    // private postApplyVisitors: TinyRemapper$ApplyVisitorProvider[];
    // private preApplyVisitors: TinyRemapper$ApplyVisitorProvider[];
    // private propagateBridges: TinyRemapper$LinkedMethodPropagation;
    // private propagatePrivate: boolean;
    // private propagateRecordComponents: TinyRemapper$LinkedMethodPropagation;
    // private readClasses: { [key: string]: ClassInstance };
    // private rebuildSourceFilenames: boolean;
    // private removeFrames: boolean;
    // private renameInvalidLocals: boolean;
    // private resolveMissing: boolean;
    // private singleInputTags: AtomicReference<Map<InputTag, InputTag[]>>;
    // private skipLocalMapping: boolean;
    // private stateProcessors: TinyRemapper$StateProcessor[];
    // private threadCount: number;
    // private threadPool: ExecutorService;
    // private analyze(arg0: boolean, arg1: InputTag[], arg2: Path[], arg3: Path[]): ClassInstance;
    apply(arg0: (param0: string, param1: number[]) => void, arg1: InputTag[]): void;
    // private apply(arg0: ClassInstance): number[];
    // private checkClassMappings(): void;
    createInputTag(): InputTag;
    finish(): void;
    // private fixClass(arg0: ClassInstance, arg1: number[]): number[];
    // private fixMrjClasses(arg0: number[]): void;
    getEnvironment(): TrEnvironment;
    getLogger(): TrLogger;
    // private handleConflicts(arg0: TinyRemapper$MrjState): void;
    // private loadMappings(): void;
    // private merge(arg0: TinyRemapper$MrjState): void;
    // private mrjRefresh(arg0: TinyRemapper$MrjState): void;
    // private propagate(arg0: TinyRemapper$MrjState): void;
    // private read(arg0: Path[], arg1: boolean, arg2: InputTag[], arg3: Path[], arg4: boolean, arg5: FileSystemReference[]): CompletableFuture<ClassInstance[]>[];
    // private read(arg0: Path[], arg1: boolean, arg2: InputTag[], arg3: boolean, arg4: FileSystemReference[]): CompletableFuture<ClassInstance[]>[];
    // private read(arg0: Path[][], arg1: boolean, arg2: InputTag): CompletableFuture<ClassInstance[]>;
    readClassPathAsync(arg0: Path[][]): CompletableFuture<Object>;
    // private readFile(arg0: Path[], arg1: boolean, arg2: InputTag[], arg3: Path[], arg4: FileSystemReference[]): ClassInstance[];
    readInputsAsync(arg0: InputTag, arg1: Path[][]): CompletableFuture<Object>;
    // private refresh(): void;
}