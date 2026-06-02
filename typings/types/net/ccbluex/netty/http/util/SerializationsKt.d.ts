import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SerializationsKt extends Object {
    static getDEFAULT_GSON(): Gson;
    static writeJson(paramarg0: ByteBufAllocator, paramarg1: Object | null): ByteBuf;
    static writeJson(paramarg0: ByteBufAllocator, paramarg1: Object | null, paramarg2: Type): ByteBuf;
    static writeJson(paramarg0: ByteBufAllocator, paramarg1: Object | null, paramarg2: Type, paramarg3: Gson): ByteBuf;
    static writeJson(paramarg0: ByteBufAllocator, paramarg1: JsonElement): ByteBuf;
    static writeJson(paramarg0: ByteBufAllocator, paramarg1: JsonElement, paramarg2: Gson): ByteBuf;
}