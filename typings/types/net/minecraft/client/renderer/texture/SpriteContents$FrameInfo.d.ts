import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContentsFrameInfoAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/SpriteContentsFrameInfoAccessor.d.ts'
export class SpriteContents$FrameInfo extends Record implements SpriteContentsFrameInfoAccessor {
    readonly index: number;
    readonly time: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    time(): number;
    toString(): string;
}