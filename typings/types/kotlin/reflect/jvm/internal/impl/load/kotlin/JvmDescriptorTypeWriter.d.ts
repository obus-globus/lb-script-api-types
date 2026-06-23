import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmTypeFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmTypeFactory.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class JvmDescriptorTypeWriter<T extends unknown> extends Object {
    // private jvmCurrentType: T;
    // private jvmCurrentTypeArrayLevel: number;
    // private jvmTypeFactory: JvmTypeFactory<T>;
    writeArrayEnd(): void;
    writeArrayType(): void;
    writeClass(arg0: T): void;
    writeJvmTypeAsIs(arg0: T): void;
    writeTypeVariable(arg0: Name, arg1: T): void;
}