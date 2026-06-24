import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandData$EnumData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData$EnumData.d.ts'
import type { CommandData$OverloadData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData$OverloadData.d.ts'
export class CommandData extends Record {
    constructor(name: string, description: string, flags: number, permission: number, alias: CommandData$EnumData, overloads: CommandData$OverloadData[])
    // private alias: CommandData$EnumData;
    // private description: string;
    // private flags: number;
    // private name: string;
    // private overloads: CommandData$OverloadData[];
    // private permission: number;
    alias(): CommandData$EnumData;
    description(): string;
    equals(arg0: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    name(): string;
    overloads(): CommandData$OverloadData[];
    permission(): number;
    toString(): string;
}