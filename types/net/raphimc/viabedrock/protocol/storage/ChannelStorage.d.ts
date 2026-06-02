import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChannelStorage extends Object implements StorableObject {
    constructor()
    // private channels: string[];
    addChannels(arg0: E[]): void;
    hasChannel(arg0: string): boolean;
    onRemove(): void;
}