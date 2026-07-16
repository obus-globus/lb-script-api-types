import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { JSONBase } from '../../../../../../org/graalvm/tools/lsp/server/types/JSONBase.d.ts'
export class Command extends JSONBase {
    static create(paramtitle: string, paramcommand: string, ...paramargs: Object[]): Command;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getArguments(): Object[];
    getCommand(): string;
    getTitle(): string;
    hashCode(): number;
    setArguments(arguments: Object[]): Command;
    setCommand(command: string): Command;
    setTitle(title: string): Command;
}