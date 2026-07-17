import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BytecodeTransition extends Object {
    constructor(token: Object)
    getAddedInstrumentations(): Class<Object>[];
    getAddedTags(): Class<Object>[];
    getNewLocation(): BytecodeLocation;
    getOldLocation(): BytecodeLocation;
    isBytecodeUpdate(): boolean;
    isTransferToInterpreter(): boolean;
    toString(): string;
}