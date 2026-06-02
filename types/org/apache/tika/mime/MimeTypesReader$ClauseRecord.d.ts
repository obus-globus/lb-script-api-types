import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Clause } from '../../../../org/apache/tika/mime/Clause.d.ts'
export class MimeTypesReader$ClauseRecord extends Object {
    constructor(null_: MimeTypesReader$ClauseRecord, arg1: Clause)
    // private clause: Clause;
    // private parent: MimeTypesReader$ClauseRecord;
    // private subclauses: Clause[];
    getClauses(): Clause[];
    stop(): void;
}