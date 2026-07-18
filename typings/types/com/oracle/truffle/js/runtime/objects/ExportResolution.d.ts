import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ExportResolution extends Object {
    static ambiguous(): ExportResolution;
    static notFound(): ExportResolution;
    static resolved(parammodule: AbstractModuleRecord, parambindingName: TruffleString): ExportResolution;
    private constructor()
    getBindingName(): TruffleString;
    getModule(): AbstractModuleRecord;
    isAmbiguous(): boolean;
    isNamespace(): boolean;
    isNull(): boolean;
}