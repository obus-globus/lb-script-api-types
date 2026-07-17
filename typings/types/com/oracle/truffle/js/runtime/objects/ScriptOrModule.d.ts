import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScriptOrModule extends Object {
    constructor(context: JSContext, source: Source)
    readonly context: JSContext;
    // private importSourceCache: JavaMap<TruffleString, Source>;
    readonly source: Source;
    addLoadedModule(realm: JSRealm, moduleRequest: Module$ModuleRequest, moduleRecord: AbstractModuleRecord): AbstractModuleRecord;
    getContext(): JSContext;
    // private getImportSourceCache(): JavaMap<TruffleString, Source>;
    getSource(): Source;
    rememberImportedModuleSource(moduleSpecifier: TruffleString, moduleSource: Source): void;
}