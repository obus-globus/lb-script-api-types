import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoadSourceEvent extends Object {
    constructor(source: Source)
    readonly source: Source;
    getSource(): Source;
}