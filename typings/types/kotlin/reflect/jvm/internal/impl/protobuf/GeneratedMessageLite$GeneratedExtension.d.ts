import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GeneratedMessageLite$ExtensionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtensionDescriptor.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export class GeneratedMessageLite$GeneratedExtension<ContainingType extends MessageLite, Type extends Object | number | string | boolean> extends Object {
    constructor(arg0: ContainingType, arg1: Type, arg2: MessageLite, arg3: GeneratedMessageLite$ExtensionDescriptor, arg4: Class<Object>)
    readonly containingTypeDefaultInstance: ContainingType;
    // private defaultValue: Type;
    // private descriptor: GeneratedMessageLite$ExtensionDescriptor;
    // private enumValueOf: Method;
    readonly messageDefaultInstance: MessageLite;
    // private singularType: Class<Object>;
    fromFieldSetType(arg0: Object): Object;
    getContainingTypeDefaultInstance(): ContainingType;
    getMessageDefaultInstance(): MessageLite;
    getNumber(): number;
    singularFromFieldSetType(arg0: Object): Object;
    singularToFieldSetType(arg0: Object): Object;
    toFieldSetType(arg0: Object): Object;
}