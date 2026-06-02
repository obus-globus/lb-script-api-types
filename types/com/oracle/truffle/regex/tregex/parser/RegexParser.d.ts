import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RegexParser extends Object{
    getFlags(): AbstractRegexObject;
    getNamedCaptureGroups(): AbstractRegexObject;
    parse(): RegexAST;
}