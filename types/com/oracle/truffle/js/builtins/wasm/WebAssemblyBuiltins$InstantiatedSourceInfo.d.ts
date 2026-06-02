import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebAssemblyBuiltins$InstantiatedSourceInfo extends Record implements TruffleObject {
    constructor(wasmModule: Object, importObject: Object, wasmSource: Source)
    // private importObject: Object;
    // private wasmModule: Object;
    // private wasmSource: Source;
    equals(o: Object | null): boolean;
    hashCode(): number;
    importObject(): Object;
    toString(): string;
    wasmModule(): Object;
    wasmSource(): Source;
}