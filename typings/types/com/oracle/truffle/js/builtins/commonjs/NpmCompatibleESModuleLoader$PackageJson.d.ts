import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NpmCompatibleESModuleLoader$PackageJson extends Object {
    constructor(jsonObj: JSObject)
    // private jsonObj: JSObject;
    getExportsProperty(): Object;
    getImportsProperty(): JSObject;
    getMainProperty(): TruffleString;
    getTypeProperty(): string;
    hasExportsProperty(): boolean;
    hasImportsProperty(): boolean;
    hasMainProperty(): boolean;
    hasTypeProperty(): boolean;
    namePropertyEquals(name: string): boolean;
}