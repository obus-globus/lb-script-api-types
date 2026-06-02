import type { NativeObject } from '../../../../dev/kastle/webrtc/internal/NativeObject.d.ts'
export abstract class DisposableNativeObject extends NativeObject {
    constructor()
    dispose(): void;
}