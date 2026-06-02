import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export class JSBuiltinsContainer extends Object {
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    constructor(name: TruffleString)
    // private accessors: EconomicMap<Object, Pair<JSBuiltin, JSBuiltin>>;
    // private functions: EconomicMap<Object, JSBuiltin>;
    readonly name: TruffleString;
    forEachAccessor(consumer: (param0: JSBuiltin, param1: JSBuiltin) => void): void;
    forEachBuiltin(consumer: (param0: JSBuiltin) => void): void;
    getName(): TruffleString;
    lookupAccessorByKey(key: Object): Pair<JSBuiltin, JSBuiltin>;
    lookupFunctionByKey(key: Object): JSBuiltin;
    register(builtin: JSBuiltin): void;
}