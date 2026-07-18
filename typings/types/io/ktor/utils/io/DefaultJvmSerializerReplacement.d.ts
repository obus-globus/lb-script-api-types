import type { DefaultJvmSerializerReplacement$Companion } from '../../../../io/ktor/utils/io/DefaultJvmSerializerReplacement$Companion.d.ts'
import type { JvmSerializer } from '../../../../io/ktor/utils/io/JvmSerializer.d.ts'
import type { Externalizable } from '../../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJvmSerializerReplacement<T extends unknown> extends Object implements Externalizable {
    static Companion: DefaultJvmSerializerReplacement$Companion;
    constructor()
    constructor(serializer: JvmSerializer<T> | null, value: T | null)
    // private serializer: JvmSerializer<T> | null;
    // private value: T | null;
    readExternal(in_: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(out: ObjectOutput): void;
}