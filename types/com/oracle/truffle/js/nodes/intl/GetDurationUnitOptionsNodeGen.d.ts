import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetDurationUnitOptionsNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetDurationUnitOptionsNode.d.ts'
import type { GetDurationUnitOptionsNode$Unit } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetDurationUnitOptionsNode$Unit.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetDurationUnitOptionsNodeGen extends GetDurationUnitOptionsNode {
    static LONG_SHORT_NARROW_NUMERIC_2DIGIT_STYLES: string[];
    static LONG_SHORT_NARROW_NUMERIC_STYLES: string[];
    static LONG_SHORT_NARROW_STYLES: string[];
    static create(paramcontext: JSContext, paramunit: GetDurationUnitOptionsNode$Unit, paramstyleList: string[], paramdigitalBase: string): GetDurationUnitOptionsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, unit: GetDurationUnitOptionsNode$Unit, styleList: string[], digitalBase: string)
    executeOptions(arg0Value: Object, arg1Value: string, arg2Value: string, arg3Value: boolean): Pair<string, string>;
}