import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { GlBufferStorageFlags } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferStorageFlags.d.ts'
import type { GlBufferTarget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferTarget.d.ts'
import type { RenderDevice } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/RenderDevice.d.ts'
import type { EnumBitField } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/util/EnumBitField.d.ts'
export class BufferStorageFunctions extends Enum<BufferStorageFunctions> {
    static ARB: BufferStorageFunctions;
    static CORE: BufferStorageFunctions;
    static NONE: BufferStorageFunctions;
    static pickBest(paramarg0: RenderDevice): BufferStorageFunctions;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BufferStorageFunctions;
    static values(): (Object | null)[];
    private constructor()
    createBufferStorage(arg0: GlBufferTarget, arg1: number, arg2: EnumBitField<GlBufferStorageFlags>): void;
    name(): "NONE" | "CORE" | "ARB";
}