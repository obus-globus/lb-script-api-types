import type { NativeObject } from '../../../../dev/kastle/webrtc/internal/NativeObject.d.ts'
import type { RefCounted } from '../../../../dev/kastle/webrtc/internal/RefCounted.d.ts'
export abstract class RefCountedObject extends NativeObject implements RefCounted {
    constructor()
    release(): void;
    retain(): void;
}