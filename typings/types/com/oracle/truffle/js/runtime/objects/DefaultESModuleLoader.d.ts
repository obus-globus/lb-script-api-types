import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { TruffleFile } from '../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { DefaultESModuleLoader$CanonicalModuleKey } from '../../../../../../com/oracle/truffle/js/runtime/objects/DefaultESModuleLoader$CanonicalModuleKey.d.ts'
import type { JSModuleLoader } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleLoader.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { FileSystemException } from '../../../../../../java/nio/file/FileSystemException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultESModuleLoader extends Object implements JSModuleLoader {
    static DOT: string;
    static DOT_DOT_SLASH: string;
    static DOT_SLASH: string;
    static SLASH: string;
    static create(paramrealm: JSRealm): DefaultESModuleLoader;
    constructor(realm: JSRealm)
    // private moduleMap: JavaMap<DefaultESModuleLoader$CanonicalModuleKey, AbstractModuleRecord>;
    // private realm: JSRealm;
    addLoadedModule(moduleRequest: Module$ModuleRequest, moduleRecord: AbstractModuleRecord): AbstractModuleRecord;
    asURI(specifier: string): URI;
    // private bareSpecifierDirectLookup(specifier: string): boolean;
    // private createErrorFromFileSystemException(fsex: FileSystemException, refPath: string): JSException;
    // private filterSupportedMimeType(foundMimeType: string, defaultMimeType: string): string;
    // private findMimeType(moduleFile: TruffleFile): string;
    // private findMimeType(moduleUrl: URL): string;
    // private getCanonicalPath(source: Source): string;
    // private loadModuleFromDataURL(referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, specifier: string): AbstractModuleRecord;
    loadModuleFromFile(referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, moduleFile: TruffleFile, maybeCanonicalPath: string): AbstractModuleRecord;
    // private loadModuleFromSource(referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, source: Source, mimeType: string, canonicalPath: string): AbstractModuleRecord;
    loadModuleFromURL(referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, moduleURI: URI): AbstractModuleRecord;
    resolveImportedModule(referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest): AbstractModuleRecord;
}