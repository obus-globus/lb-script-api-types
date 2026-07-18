import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { TruffleFile } from '../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage$Env } from '../../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { NpmCompatibleESModuleLoader$Format } from '../../../../../../com/oracle/truffle/js/builtins/commonjs/NpmCompatibleESModuleLoader$Format.d.ts'
import type { NpmCompatibleESModuleLoader$PackageJson } from '../../../../../../com/oracle/truffle/js/builtins/commonjs/NpmCompatibleESModuleLoader$PackageJson.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { DefaultESModuleLoader } from '../../../../../../com/oracle/truffle/js/runtime/objects/DefaultESModuleLoader.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
export class NpmCompatibleESModuleLoader extends DefaultESModuleLoader {
    static DOT: string;
    static DOT_DOT_SLASH: string;
    static DOT_SLASH: string;
    static SLASH: string;
    static create(paramrealm: JSRealm): NpmCompatibleESModuleLoader;
    static create(paramrealm: JSRealm): DefaultESModuleLoader;
    private constructor(realm: JSRealm)
    // private esmFileFormat(url: URI, env: TruffleLanguage$Env): NpmCompatibleESModuleLoader$Format;
    // private esmResolve(specifier: string, parentURL: URI, env: TruffleLanguage$Env): URI;
    // private getFullPath(referencingModule: ScriptOrModule): TruffleFile;
    // private loadCoreModuleReplacement(referencingModule: ScriptOrModule, moduleRequest: Module$ModuleRequest, moduleReplacementName: string): AbstractModuleRecord;
    // private lookupPackageScope(url: URI, env: TruffleLanguage$Env): URI;
    // private packageResolve(packageSpecifier: string, parentURL: URI, env: TruffleLanguage$Env): URI;
    // private packageSelfResolve(packageName: string, parentURL: URI, env: TruffleLanguage$Env): URI;
    // private readPackageJson(packageUrl: URI, env: TruffleLanguage$Env): NpmCompatibleESModuleLoader$PackageJson;
    resolveImportedModule(referencingModule: ScriptOrModule, moduleRequest: Module$ModuleRequest): AbstractModuleRecord;
    // private tryLoadingAsCommonjsModule(specifier: string): AbstractModuleRecord;
}