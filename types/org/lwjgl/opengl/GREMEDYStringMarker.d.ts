import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class GREMEDYStringMarker extends Object {
    static glStringMarkerGREMEDY(paramarg0: CharSequence): void;
    static glStringMarkerGREMEDY(paramarg0: ByteBuffer): void;
    static nglStringMarkerGREMEDY(paramarg0: number, paramarg1: number): void;
    constructor()
}