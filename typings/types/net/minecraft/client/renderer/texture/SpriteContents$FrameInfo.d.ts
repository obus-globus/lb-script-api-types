import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContentsFrameInfoAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/SpriteContentsFrameInfoAccessor.d.ts'
export class SpriteContents$FrameInfo extends Record implements SpriteContentsFrameInfoAccessor {
    equals(o: Object | null): boolean;
    getIndex(): number;
    getTime(): number;
    hashCode(): number;
    index(): number;
    time(): number;
    toString(): string;
}