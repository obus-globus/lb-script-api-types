import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LogManager$Record } from '../../../../../org/antlr/v4/runtime/misc/LogManager$Record.d.ts'
export class LogManager extends Object {
    static main(paramarg0: (Object | null)[]): void;
    constructor()
    // private records: LogManager$Record[];
    log(arg0: string): void;
    log(arg0: string, arg1: string): void;
    save(): string;
    save(arg0: string): void;
    toString(): string;
}