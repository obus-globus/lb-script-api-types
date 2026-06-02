import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NativeBuffer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export interface PresentSortData extends Object{
    getIndexBuffer(): NativeBuffer;
    getIntBuffer(): IntBuffer;
}