import type { InstanceCreator } from '../../../../../../com/viaversion/viaversion/libs/gson/InstanceCreator.d.ts'
import type { ObjectConstructor } from '../../../../../../com/viaversion/viaversion/libs/gson/internal/ObjectConstructor.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConstructorConstructor$InstanceCreatorConstructor<T extends unknown> extends Object implements ObjectConstructor<T> {
    constructor(arg0: InstanceCreator<T>, arg1: Type)
    // private instanceCreator: InstanceCreator<T>;
    // private type: Type;
    construct(): T;
}