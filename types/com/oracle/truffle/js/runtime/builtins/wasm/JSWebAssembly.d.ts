import type { HiddenKey } from '../../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssembly extends Object {
    static CLASS_NAME: TruffleString;
    static FUNCTION_ADDRESS: HiddenKey;
    static create(paramrealm: JSRealm): JSObject;
    static getEmbedderData(paramrealm: JSRealm, paramwasmEntity: Object): Object;
    static getExportedFunction(paramfunction: JSDynamicObject): Object;
    static isExportedFunction(paramfunction: Object): boolean;
    static setEmbedderData(paramrealm: JSRealm, paramwasmEntity: Object, paramdata: Object): void;
    private constructor()
}