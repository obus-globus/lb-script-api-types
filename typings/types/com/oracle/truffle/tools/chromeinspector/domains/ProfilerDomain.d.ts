import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { Domain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/Domain.d.ts'
export abstract class ProfilerDomain extends Domain {
    constructor()
    getBestEffortCoverage(): Params;
    setSamplingInterval(interval: number): void;
    start(): void;
    startPreciseCoverage(callCount: boolean, detailed: boolean): void;
    startTypeProfile(): void;
    stop(): Params;
    stopPreciseCoverage(): void;
    stopTypeProfile(): void;
    takePreciseCoverage(): Params;
    takeTypeProfile(): Params;
}