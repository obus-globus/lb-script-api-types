import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Test262Builtins$Test262 extends Enum<Test262Builtins$Test262> implements BuiltinEnum<Test262Builtins$Test262> {
    static agentBroadcast: Test262Builtins$Test262;
    static agentGetReport: Test262Builtins$Test262;
    static agentLeaving: Test262Builtins$Test262;
    static agentReceiveBroadcast: Test262Builtins$Test262;
    static agentReport: Test262Builtins$Test262;
    static agentSleep: Test262Builtins$Test262;
    static agentStart: Test262Builtins$Test262;
    static createRealm: Test262Builtins$Test262;
    static detachArrayBuffer: Test262Builtins$Test262;
    static evalScript: Test262Builtins$Test262;
    static gc: Test262Builtins$Test262;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Test262Builtins$Test262;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): Test262Builtins$Test262;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    isAOTSupported(): boolean;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isConstructor(): boolean;
    isEnabled(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isNewTargetConstructor(): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "createRealm" | "evalScript" | "detachArrayBuffer" | "gc" | "agentStart" | "agentBroadcast" | "agentGetReport" | "agentSleep" | "agentReceiveBroadcast" | "agentReport" | "agentLeaving";
}