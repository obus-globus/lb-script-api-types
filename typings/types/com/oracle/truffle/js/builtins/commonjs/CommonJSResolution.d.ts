import type { TruffleFile } from '../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CommonJSResolution extends Object {
    static CJS_EXT: string;
    static FILE: string;
    static INDEX_JS: string;
    static INDEX_JSON: string;
    static INDEX_NODE: string;
    static JSON_EXT: string;
    static JS_EXT: string;
    static MJS_EXT: string;
    static NODE_EXT: string;
    static NODE_MODULES: string;
    static PACKAGE_JSON: string;
    static fileExists(parammodulePath: TruffleFile): boolean;
    static getCoreModuleReplacement(paramrealm: JSRealm, parammoduleIdentifier: string): string;
    static getNodeModulesPaths(parampath: TruffleFile): TruffleFile[];
    static joinPaths(paramp1: TruffleFile, paramp2: string): TruffleFile;
    static loadIndex(parammodulePath: TruffleFile): TruffleFile;
    static loadJsonObject(paramjsonFile: TruffleFile, paramrealm: JSRealm): JSDynamicObject;
    private constructor()
}