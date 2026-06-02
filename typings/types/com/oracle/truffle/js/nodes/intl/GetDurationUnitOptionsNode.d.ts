import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetDurationUnitOptionsNode$Unit } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetDurationUnitOptionsNode$Unit.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetDurationUnitOptionsNode extends JavaScriptBaseNode {
    static LONG_SHORT_NARROW_NUMERIC_2DIGIT_STYLES: string[];
    static LONG_SHORT_NARROW_NUMERIC_STYLES: string[];
    static LONG_SHORT_NARROW_STYLES: string[];
    static create(paramcontext: JSContext, paramunit: GetDurationUnitOptionsNode$Unit, paramstyleList: string[], paramdigitalBase: string): GetDurationUnitOptionsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, unit: GetDurationUnitOptionsNode$Unit, styleList: string[], digitalBase: string)
    // private digitalBase: string;
    // private errorBranch: BranchProfile;
    // private getDisplayOption: GetStringOptionNode;
    // private getStyleOption: GetStringOptionNode;
    // private unit: GetDurationUnitOptionsNode$Unit;
    executeOptions(options: Object, baseStyle: string, prevStyle: string, twoDigitHours: boolean): Pair<string, string>;
    getOptions(options: Object, baseStyle: string, prevStyle: string, twoDigitHours: boolean): Pair<string, string>;
}