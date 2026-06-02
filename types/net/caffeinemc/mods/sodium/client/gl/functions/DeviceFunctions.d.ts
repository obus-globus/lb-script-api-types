import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RenderDevice } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/RenderDevice.d.ts'
import type { BufferStorageFunctions } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/functions/BufferStorageFunctions.d.ts'
export class DeviceFunctions extends Object {
    constructor(arg0: RenderDevice)
    readonly bufferStorageFunctions: BufferStorageFunctions;
    getBufferStorageFunctions(): BufferStorageFunctions;
}