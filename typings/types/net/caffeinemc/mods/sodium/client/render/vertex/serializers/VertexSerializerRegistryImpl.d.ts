import type { VertexFormat } from '../../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { StampedLock } from '../../../../../../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VertexSerializer } from '../../../../../../../../net/caffeinemc/mods/sodium/api/vertex/serializer/VertexSerializer.d.ts'
import type { VertexSerializerRegistry } from '../../../../../../../../net/caffeinemc/mods/sodium/api/vertex/serializer/VertexSerializerRegistry.d.ts'
export class VertexSerializerRegistryImpl extends Object implements VertexSerializerRegistry {
    static INSTANCE: VertexSerializerRegistry;
    static instance(): VertexSerializerRegistry;
    constructor()
    // private cache: { [key: string]: any };
    // private lock: StampedLock;
    // private create(arg0: number, arg1: VertexFormat, arg2: VertexFormat): VertexSerializer;
    // private find(arg0: number): VertexSerializer;
    get(arg0: VertexFormat, arg1: VertexFormat): VertexSerializer;
    registerSerializer(arg0: VertexFormat, arg1: VertexFormat, arg2: VertexSerializer): void;
}