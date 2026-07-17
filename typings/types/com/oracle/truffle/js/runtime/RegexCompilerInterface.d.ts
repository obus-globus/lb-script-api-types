import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegexCompilerInterface extends Object {
    static compile(parampattern: TruffleString, paramflags: TruffleString, paramcontext: JSContext, paramrealm: JSRealm): Object;
    static compile(parampattern: string, paramflags: string, paramcontext: JSContext, paramrealm: JSRealm): Object;
    static compile(parampattern: string, paramflags: string, paramcontext: JSContext, paramrealm: JSRealm, paramisCompiledRegexNull: InteropLibrary): Object;
    static createRegexSource(parampattern: string, paramflags: string, paramoptions: JavaMap<string, string>): Source;
    static validate(paramcontext: JSContext, parampattern: string, paramflags: string, paramecmaScriptVersion: number): void;
    static validateFlags(paramflags: string, paramecmaScriptVersion: number, paramnashornCompat: boolean, paramallowHasIndices: boolean, paramallowUnicodeSets: boolean): void;
    private constructor()
}