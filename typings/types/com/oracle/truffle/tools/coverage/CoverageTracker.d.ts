import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { LoadSourceSectionEvent } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { LoadSourceSectionListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { AbstractCoverageNode } from '../../../../../com/oracle/truffle/tools/coverage/AbstractCoverageNode.d.ts'
import type { CoverageTracker$Config } from '../../../../../com/oracle/truffle/tools/coverage/CoverageTracker$Config.d.ts'
import type { CoverageTracker$RootData } from '../../../../../com/oracle/truffle/tools/coverage/CoverageTracker$RootData.d.ts'
import type { SourceCoverage } from '../../../../../com/oracle/truffle/tools/coverage/SourceCoverage.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoverageTracker extends Object implements AutoCloseable {
    private constructor(env: TruffleInstrument$Env)
    // private closed: boolean;
    // private coverageNodes: AbstractCoverageNode[];
    // private coveredBinding: EventBinding<ExecutionEventNodeFactory>;
    // private env: TruffleInstrument$Env;
    // private loadedRoots: LoadSourceSectionEvent[];
    // private loadedRootsBinding: EventBinding<LoadSourceSectionListener>;
    // private loadedStatementBinding: EventBinding<LoadSourceSectionListener>;
    // private loadedStatements: LoadSourceSectionEvent[];
    // private noReset: Assumption;
    // private tracking: boolean;
    // private addCoverageNode(coverageNode: AbstractCoverageNode): void;
    // private addRoot(event: LoadSourceSectionEvent): void;
    // private addStatement(event: LoadSourceSectionEvent): void;
    // private clearData(): void;
    close(): void;
    // private disposeBindings(): void;
    end(): void;
    getCoverage(): SourceCoverage[];
    // private instrument(config: CoverageTracker$Config, instrumenter: Instrumenter): void;
    // private instrumentExecution(config: CoverageTracker$Config, instrumenter: Instrumenter, f: SourceSectionFilter): void;
    // private instrumentLoadedRoots(instrumenter: Instrumenter, f: SourceSectionFilter): void;
    // private instrumentLoadedStatements(instrumenter: Instrumenter, f: SourceSectionFilter): void;
    // private mapping(reset: boolean): JavaMap<Source, JavaMap<SourceSection, CoverageTracker$RootData>>;
    // private processCovered(mapping: JavaMap<Source, JavaMap<SourceSection, CoverageTracker$RootData>>, reset: boolean): void;
    // private processLoaded(sourceCoverage: JavaMap<Source, JavaMap<SourceSection, CoverageTracker$RootData>>): void;
    // private processLoadedRoots(sourceCoverage: JavaMap<Source, JavaMap<SourceSection, CoverageTracker$RootData>>): void;
    // private processLoadedSections(sourceCoverage: JavaMap<Source, JavaMap<SourceSection, CoverageTracker$RootData>>): void;
    resetCoverage(): SourceCoverage[];
    start(config: CoverageTracker$Config): void;
}