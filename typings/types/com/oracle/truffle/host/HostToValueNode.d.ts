import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostLanguage } from '../../../../com/oracle/truffle/host/HostLanguage.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl$AbstractValueDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractValueDispatch.d.ts'
export abstract class HostToValueNode extends Node {
    constructor()
    doCached(context: HostContext, value: Object, language: HostLanguage, cachedClass: Class<Object>, cachedValue: AbstractPolyglotImpl$AbstractValueDispatch): Value;
    doGeneric(context: HostContext, value: Object): Value;
    execute(context: HostContext, value: Object): Value;
}