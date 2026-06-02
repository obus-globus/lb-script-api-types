import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$Default } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$Default.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSConstructorFactory$Default$WithSpecies extends JSConstructorFactory$Default, Object{
    createConstructorAndPrototype(realm: JSRealm): JSConstructor;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
}