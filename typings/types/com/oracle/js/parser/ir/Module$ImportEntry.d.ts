import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Module$ImportEntry extends Object {
    static importDefault(paramlocalName: TruffleString): Module$ImportEntry;
    static importSource(parammoduleRequest: Module$ModuleRequest, paramlocalName: TruffleString): Module$ImportEntry;
    static importSpecifier(paramimportName: TruffleString): Module$ImportEntry;
    static importSpecifier(paramimportName: TruffleString, paramlocalName: TruffleString): Module$ImportEntry;
    static importStarAsNameSpaceFrom(paramlocalNameSpace: TruffleString): Module$ImportEntry;
    private constructor(moduleRequest: Module$ModuleRequest, importName: TruffleString, localName: TruffleString)
    readonly importName: TruffleString;
    readonly localName: TruffleString;
    readonly moduleRequest: Module$ModuleRequest;
    getImportName(): TruffleString;
    getLocalName(): TruffleString;
    getModuleRequest(): Module$ModuleRequest;
    toString(): string;
    withFrom(moduleRequest: Module$ModuleRequest): Module$ImportEntry;
}