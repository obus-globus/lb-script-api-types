import type { InputStringGenerator } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator.d.ts'
import type { InputStringGenerator$BacktrackingEntry } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$BacktrackingEntry.d.ts'
import type { InputStringGenerator$LotteryBox } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$LotteryBox.d.ts'
import type { Group } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
export class InputStringGenerator$BacktrackGroupEntry extends InputStringGenerator$BacktrackingEntry {
    private constructor(choices: InputStringGenerator$LotteryBox, group: Group)
    // private group: Group;
    apply(gen: InputStringGenerator): void;
}