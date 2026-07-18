import type { DebugScope } from '../../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugValue } from '../../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { RemoteObject$IndexRange } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject$IndexRange.d.ts'
import type { RemoteObject$TypeMark } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject$TypeMark.d.ts'
import type { TypeInfo } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/TypeInfo.d.ts'
import type { TypeInfo$TYPE } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/TypeInfo$TYPE.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class RemoteObject extends Object {
    static createJSONResultValue(paramdebugValue: DebugValue, paramallowToStringSideEffects: boolean, paramerr: PrintWriter): JSONObject;
    static createNullObject(paramenv: TruffleInstrument$Env, paramlanguage: LanguageInfo): RemoteObject;
    static createSimpleObject(paramtype: TypeInfo$TYPE, paramclassName: string, paramdescription: string): RemoteObject;
    static resetIDs(): void;
    constructor(scope: DebugScope)
    constructor(scope: DebugScope, objectId: string)
    constructor(debugValue: DebugValue, generatePreview: boolean, context: InspectorExecutionContext)
    constructor(debugValue: DebugValue, readEagerly: boolean, generatePreview: boolean, context: InspectorExecutionContext)
    constructor(debugValue: DebugValue, readEagerly: boolean, generatePreview: boolean, context: InspectorExecutionContext, indexRange: RemoteObject$IndexRange)
    constructor(debugValue: DebugValue, readEagerly: boolean, generatePreview: boolean, context: InspectorExecutionContext, typeMark: RemoteObject$TypeMark)
    // private context: InspectorExecutionContext;
    // private customPreview: JSONObject;
    // private description: string;
    // private generatePreview: boolean;
    readonly indexRange: RemoteObject$IndexRange;
    // private jsonObject: JSONObject;
    // private objectId: string;
    // private preview: JSONObject;
    // private replicableValue: boolean;
    readonly scopeReceiver: DebugValue;
    // private typeInfo: TypeInfo;
    readonly typeMark: RemoteObject$TypeMark;
    // private unserializableValue: string;
    // private value: Object;
    // private valueScope: DebugScope;
    // private valueValue: DebugValue;
    // private createJSON(): JSONObject;
    getDebugValue(): DebugValue;
    getId(): string;
    getIndexRange(): RemoteObject$IndexRange;
    getRawValue(): Object;
    getScope(): DebugScope;
    getScopeReceiver(): DebugValue;
    getTypeMark(): RemoteObject$TypeMark;
    // private initFromValue(): boolean;
    isReplicable(): boolean;
    setScopeReceiver(scopeReceiver: DebugValue): void;
    toJSON(): JSONObject;
}