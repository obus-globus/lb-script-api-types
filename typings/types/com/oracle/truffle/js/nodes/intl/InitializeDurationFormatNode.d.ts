import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetDurationUnitOptionsNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetDurationUnitOptionsNode.d.ts'
import type { GetNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetNumberOptionNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDurationFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDurationFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeDurationFormatNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): InitializeDurationFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private canonicalizedLocaleList: JSToCanonicalizedLocaleListNode;
    // private errorBranch: BranchProfile;
    // private getDaysOptions: GetDurationUnitOptionsNode;
    // private getFractionalDigitsOption: GetNumberOptionNode;
    // private getHoursOptions: GetDurationUnitOptionsNode;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getMicrosecondsOptions: GetDurationUnitOptionsNode;
    // private getMillisecondsOptions: GetDurationUnitOptionsNode;
    // private getMinutesOptions: GetDurationUnitOptionsNode;
    // private getMonthsOptions: GetDurationUnitOptionsNode;
    // private getNanosecondsOptions: GetDurationUnitOptionsNode;
    // private getNumberingSystemOption: GetStringOptionNode;
    // private getOptionsObject: GetOptionsObjectNode;
    // private getSecondsOptions: GetDurationUnitOptionsNode;
    // private getStyleOption: GetStringOptionNode;
    // private getWeeksOptions: GetDurationUnitOptionsNode;
    // private getYearsOptions: GetDurationUnitOptionsNode;
    executeInit(durationFormat: JSDurationFormatObject, locales: Object, options: Object): JSDurationFormatObject;
    initialize(durationFormat: JSDurationFormatObject, locales: Object, optionsArg: Object): JSDurationFormatObject;
}