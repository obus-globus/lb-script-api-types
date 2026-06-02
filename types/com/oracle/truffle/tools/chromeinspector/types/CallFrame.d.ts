import type { DebugStackFrame } from '../../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { SuspendAnchor } from '../../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Location } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/Location.d.ts'
import type { RemoteObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject.d.ts'
import type { Scope } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/Scope.d.ts'
import type { Script } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/Script.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class CallFrame extends Object {
    constructor(frame: DebugStackFrame, depth: number, script: Script, sourceSection: SourceSection, anchor: SuspendAnchor, functionSourceSection: SourceSection, thisObject: RemoteObject, returnObject: RemoteObject, scopes: Scope[])
    // private depth: number;
    readonly frame: DebugStackFrame;
    // private functionLocation: Location;
    readonly location: Location;
    // private returnObject: RemoteObject;
    // private scopes: Scope[];
    // private thisObject: RemoteObject;
    // private url: string;
    // private createJSON(): JSONObject;
    getFrame(): DebugStackFrame;
    getFunctionName(): string;
    getLocation(): Location;
    getReturnValue(): RemoteObject;
    getScopeChain(): Scope[];
    getThis(): RemoteObject;
    toJSON(): JSONObject;
}