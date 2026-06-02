import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { AbstractInspectorObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractInspectorObject$MethodExecutable extends Object implements TruffleObject {
    constructor(inspector: AbstractInspectorObject, name: string)
    // private inspector: AbstractInspectorObject;
    // private name: string;
    execute(arguments: Object[], interop: InteropLibrary): Object;
    isExecutable(): boolean;
}