import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SNbtDeserializer } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/SNbtDeserializer.d.ts'
import type { SNbtSerializer } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/SNbtSerializer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class SNbt<T extends Tag> extends Object {
    static LATEST: SNbt<Map$Entry<string, Tag>[]>;
    static V1_12: SNbt<Map$Entry<string, Tag>[]>;
    static V1_13: SNbt<Map$Entry<string, Tag>[]>;
    static V1_14: SNbt<Map$Entry<string, Tag>[]>;
    static V1_21_5: SNbt<Map$Entry<string, Tag>[]>;
    static V1_7: SNbt<Tag>;
    static V1_8: SNbt<Map$Entry<string, Tag>[]>;
    constructor(arg0: () => SNbtSerializer, arg1: () => SNbtDeserializer<T>)
    readonly deserializer: SNbtDeserializer<T>;
    // private deserializerSupplier: () => SNbtDeserializer<T>;
    readonly serializer: SNbtSerializer;
    // private serializerSupplier: () => SNbtSerializer;
    deserialize(arg0: string): T;
    getDeserializer(): SNbtDeserializer<T>;
    getSerializer(): SNbtSerializer;
    serialize(arg0: Tag): string;
    tryDeserialize(arg0: string): T;
    trySerialize(arg0: Tag): string;
}