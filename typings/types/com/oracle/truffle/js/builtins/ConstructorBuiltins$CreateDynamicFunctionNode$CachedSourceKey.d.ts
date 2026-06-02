import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey extends Record {
    constructor(paramList: string, body: string, sourceName: string, activeScriptOrModule: ScriptOrModule)
    // private activeScriptOrModule: ScriptOrModule;
    // private body: string;
    // private paramList: string;
    // private sourceName: string;
    activeScriptOrModule(): ScriptOrModule;
    body(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    paramList(): string;
    sourceName(): string;
    toString(): string;
}