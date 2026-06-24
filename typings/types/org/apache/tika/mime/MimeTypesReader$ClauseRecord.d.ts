import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Clause } from '../../../../org/apache/tika/mime/Clause.d.ts'
import type { MimeTypesReader } from '../../../../org/apache/tika/mime/MimeTypesReader.d.ts'
export class MimeTypesReader$ClauseRecord extends Object {
    constructor(null_: MimeTypesReader, arg1: Clause)
    // private clause: Clause;
    // private parent: MimeTypesReader$ClauseRecord;
    // private subclauses: Clause[];
    getClauses(): Clause[];
    stop(): void;
}