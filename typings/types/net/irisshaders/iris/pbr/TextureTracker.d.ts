import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class TextureTracker extends Object {
    static INSTANCE: TextureTracker;
    private constructor()
    // private lockBindCallback: boolean;
    // private textures: JavaMap<any, any>;
    getTexture(arg0: number): AbstractTexture;
    onDeleteTexture(arg0: number): void;
    trackTexture(arg0: number, arg1: AbstractTexture): void;
}