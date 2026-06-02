import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSFunctionFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionFactory.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { CompilableBiFunction } from '../../../../../../com/oracle/truffle/js/runtime/util/CompilableBiFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSObjectFactory$IntrinsicBuilder extends Object {
    constructor(context: JSContext)
    // private closed: boolean;
    // private context: JSContext;
    // private count: number;
    create<T extends JSClass & PrototypeSupplier>(jsclass: T): JSObjectFactory;
    create(prototypeSupplier: (param0: JSRealm) => com.oracle.truffle.js.runtime.objects.JSDynamicObject, jsclass: JSClass): JSObjectFactory;
    create(prototypeSupplier: (param0: JSRealm) => com.oracle.truffle.js.runtime.objects.JSDynamicObject, shapeSupplier: (param0: JSContext, param1: JSDynamicObject) => Shape): JSObjectFactory;
    finish(): number;
    function(intrinsicDefaultProto: (param0: JSRealm) => com.oracle.truffle.js.runtime.objects.JSDynamicObject, isStrict: boolean, isConstructor: boolean, isGenerator: boolean, isBound: boolean, isAsync: boolean): JSFunctionFactory;
    nextIndex(): number;
}