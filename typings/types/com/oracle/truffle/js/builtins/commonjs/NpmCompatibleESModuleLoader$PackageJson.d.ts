import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NpmCompatibleESModuleLoader$PackageJson extends Object {
    constructor(jsonObj: JSDynamicObject)
    // private jsonObj: JSDynamicObject;
    getMainProperty(): TruffleString;
    hasExportsProperty(): boolean;
    hasMainProperty(): boolean;
    hasTypeModule(): boolean;
    namePropertyEquals(name: string): boolean;
}