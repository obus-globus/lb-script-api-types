import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class EXTDebugMarker extends Object {
    static glInsertEventMarkerEXT(paramarg0: CharSequence): void;
    static glInsertEventMarkerEXT(paramarg0: ByteBuffer): void;
    static glPopGroupMarkerEXT(): void;
    static glPushGroupMarkerEXT(paramarg0: CharSequence): void;
    static glPushGroupMarkerEXT(paramarg0: ByteBuffer): void;
    static nglInsertEventMarkerEXT(paramarg0: number, paramarg1: number): void;
    static nglPushGroupMarkerEXT(paramarg0: number, paramarg1: number): void;
    constructor()
}