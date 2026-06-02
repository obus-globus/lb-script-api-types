import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { GetBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSLocaleObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSLocaleObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeLocaleNode extends JavaScriptBaseNode {
    static createInitalizeLocaleNode(paramcontext: JSContext): InitializeLocaleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static stringToWeekdayValue(paramfw: string): number;
    constructor(context: JSContext)
    // private coerceOptionsToObjectNode: CoerceOptionsToObjectNode;
    // private errorBranch: BranchProfile;
    // private getCalendarOption: GetStringOptionNode;
    // private getCaseFirstOption: GetStringOptionNode;
    // private getCollationOption: GetStringOptionNode;
    // private getFirstDayOfWeekOption: GetStringOptionNode;
    // private getHourCycleOption: GetStringOptionNode;
    // private getLanguageOption: GetStringOptionNode;
    // private getNumberingSystemOption: GetStringOptionNode;
    // private getNumericOption: GetBooleanOptionNode;
    // private getRegionOption: GetStringOptionNode;
    // private getScriptOption: GetStringOptionNode;
    // private getVariantsOption: GetStringOptionNode;
    executeInit(locale: JSLocaleObject, tag: Object, options: Object): JSLocaleObject;
    initializeLocaleOther(localeObject: JSLocaleObject, tagArg: Object, optionsArg: Object): JSLocaleObject;
    // private initializeLocaleUsingJString(localeObject: JSLocaleObject, tagArg: string, optionsArg: Object): JSLocaleObject;
    initializeLocaleUsingLocale(localeObject: JSLocaleObject, tagArg: JSLocaleObject, optionsArg: Object): JSLocaleObject;
    initializeLocaleUsingObject(localeObject: JSLocaleObject, tagArg: JSObject, optionsArg: Object, toStringNode: JSToStringNode): JSLocaleObject;
    initializeLocaleUsingString(localeObject: JSLocaleObject, tagArg: TruffleString, optionsArg: Object): JSLocaleObject;
    // private updateLanguageId(tag: string, options: Object): string;
}