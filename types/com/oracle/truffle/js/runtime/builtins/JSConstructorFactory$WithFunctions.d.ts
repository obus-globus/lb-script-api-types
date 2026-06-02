import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSConstructorFactory$WithFunctions extends JSConstructorFactory, Object{
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createConstructorObject(realm: JSRealm): JSFunctionObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
}