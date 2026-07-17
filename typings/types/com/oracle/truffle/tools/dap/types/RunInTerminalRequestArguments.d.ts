import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class RunInTerminalRequestArguments extends JSONBase {
    static create(paramcwd: string, paramargs: string[]): RunInTerminalRequestArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getArgs(): string[];
    getCwd(): string;
    getEnv(): JavaMap<string, string>;
    getKind(): string;
    getTitle(): string;
    hashCode(): number;
    setArgs(args: string[]): RunInTerminalRequestArguments;
    setCwd(cwd: string): RunInTerminalRequestArguments;
    setEnv(env: JavaMap<string, string>): RunInTerminalRequestArguments;
    setKind(kind: string): RunInTerminalRequestArguments;
    setTitle(title: string): RunInTerminalRequestArguments;
}