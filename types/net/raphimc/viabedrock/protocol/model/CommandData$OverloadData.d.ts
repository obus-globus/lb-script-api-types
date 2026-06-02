import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandData$OverloadData$ParamData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData$OverloadData$ParamData.d.ts'
export class CommandData$OverloadData extends Record {
    // private chaining: boolean;
    // private parameters: CommandData$OverloadData$ParamData[];
    chaining(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    parameters(): CommandData$OverloadData$ParamData[];
    toString(): string;
}