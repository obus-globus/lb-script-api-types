import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
export class ExportResolution$Ambiguous extends ExportResolution {
    static ambiguous(): ExportResolution;
    static notFound(): ExportResolution;
    static resolved(parammodule: AbstractModuleRecord, parambindingName: TruffleString): ExportResolution;
    private constructor()
    isAmbiguous(): boolean;
}