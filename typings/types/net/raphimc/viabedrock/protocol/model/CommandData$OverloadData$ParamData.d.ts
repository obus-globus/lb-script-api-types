import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandRegistry_HardNonTerminal } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/CommandRegistry_HardNonTerminal.d.ts'
import type { CommandData$EnumData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData$EnumData.d.ts'
import type { CommandData$SubCommandData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData$SubCommandData.d.ts'
export class CommandData$OverloadData$ParamData extends Record {
    // private enumData: CommandData$EnumData;
    // private flags: number;
    // private name: string;
    // private optional: boolean;
    // private postfix: string;
    // private subCommandData: CommandData$SubCommandData;
    // private type: CommandRegistry_HardNonTerminal;
    enumData(): CommandData$EnumData;
    equals(arg0: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    name(): string;
    optional(): boolean;
    postfix(): string;
    subCommandData(): CommandData$SubCommandData;
    toString(): string;
    type(): CommandRegistry_HardNonTerminal;
}