import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class GLXARBGetProcAddress extends Object {
    static glXGetProcAddressARB(paramarg0: CharSequence): number;
    static glXGetProcAddressARB(paramarg0: ByteBuffer): number;
    static nglXGetProcAddressARB(paramarg0: number): number;
    constructor()
}