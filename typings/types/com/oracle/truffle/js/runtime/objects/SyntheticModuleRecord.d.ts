import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { CyclicModuleRecord$Status } from '../../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord$Status.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { JSModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { SyntheticModuleRecord$SharedData } from '../../../../../../com/oracle/truffle/js/runtime/objects/SyntheticModuleRecord$SharedData.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SyntheticModuleRecord extends AbstractModuleRecord {
    constructor(context: JSContext, source: Source, hostDefined: Object, shared: SyntheticModuleRecord$SharedData, evaluationSteps: (param0: SyntheticModuleRecord) => void)
    constructor(context: JSContext, source: Source, hostDefined: Object, exportedNames: TruffleString[], evaluationSteps: (param0: SyntheticModuleRecord) => void)
    readonly evaluationError: AbstractTruffleException;
    // private evaluationSteps: (param0: SyntheticModuleRecord) => void;
    readonly exportedNames: TruffleString[];
    readonly status: CyclicModuleRecord$Status;
    evaluate(realm: JSRealm): JSPromiseObject;
    evaluateSync(realm: JSRealm): void;
    getEvaluationError(): AbstractTruffleException;
    getExportedNames(): TruffleString[];
    getExportedNames(exportStarSet: JSModuleRecord[]): TruffleString[];
    getModuleSource(): Object;
    getStatus(): CyclicModuleRecord$Status;
    // private initializeEnvironment(): void;
    link(realm: JSRealm): void;
    loadRequestedModules(realm: JSRealm, hostDefinedArg: Object): JSPromiseObject;
    resolveExport(exportName: TruffleString): ExportResolution;
    resolveExport(exportName: TruffleString, resolveSet: Pair<AbstractModuleRecord, TruffleString>[]): ExportResolution;
    setSyntheticModuleExport(exportName: TruffleString, exportValue: Object): void;
    toString(): string;
}