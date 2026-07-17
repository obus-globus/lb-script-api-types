import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExportResolution$Resolved extends ExportResolution {
    static ambiguous(): ExportResolution;
    static notFound(): ExportResolution;
    static resolved(parammodule: AbstractModuleRecord, parambindingName: TruffleString): ExportResolution;
    constructor(module: AbstractModuleRecord, bindingName: TruffleString)
    readonly bindingName: TruffleString;
    readonly module: AbstractModuleRecord;
    equals(obj: Object | null): boolean;
    getBindingName(): TruffleString;
    getModule(): AbstractModuleRecord;
    hashCode(): number;
    isDeferredNamespace(): boolean;
    isNamespace(): boolean;
    isSource(): boolean;
}