import type { StreamReadConstraints$Builder } from '../../../../../../com/azure/json/implementation/jackson/core/StreamReadConstraints$Builder.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StreamReadConstraints extends Object implements Serializable {
    static DEFAULT_MAX_DEPTH: number;
    static DEFAULT_MAX_DOC_LEN: number;
    static DEFAULT_MAX_NAME_LEN: number;
    static DEFAULT_MAX_NUM_LEN: number;
    static DEFAULT_MAX_STRING_LEN: number;
    static builder(): StreamReadConstraints$Builder;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    // private _maxDocLen: number;
    // private _maxNameLen: number;
    // private _maxNestingDepth: number;
    // private _maxNumLen: number;
    // private _maxStringLen: number;
}